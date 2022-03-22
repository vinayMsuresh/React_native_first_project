import React,{useEffect, useState} from 'react'
import {TextInput, Button} from 'react-native-paper';
import {View,Alert} from 'react-native';
import styles from '../Styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db, createTable } from '../assets/db/db';
export default function Login() {
  const [email,setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [users, setusers] = useState([]);
  useEffect(()=>{
    createTable();
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM USERS',null,
        (txObj, {rows:{_array} }) => {
          setusers(_array);
          console.log(_array);
        },
        (txObj, error) =>console.log(error)
      )
    })
  },[])


  const handleUp = async() => {
    let user = {id:Math.random().toString(36).slice(2),email:email, password:password}
    try{
      let users = [];
      users = await AsyncStorage.getItem('user');
      users = JSON.parse(users);
      if(users){
        if(users.filter(i=>i.email === email).length > 0){
          Alert.alert('Email already exists');
        }
        else{
          db.transaction(tx => {
            tx.executeSql('INSERT INTO USERS (EMAIL, PASSWORD) values (?, ?)', [email, password],
              (txObj, resultSet) => setusers([...users, {id: resultSet.insertId, email:email, password:password}]),
              (txObj, error) => console.log('Error', error))
          })
          users.push(user);
          await AsyncStorage.setItem('user',JSON.stringify(users));
          Alert.alert('user added successfully');
        }
      }
      else{
        users = [];
        users.push(user);
          await AsyncStorage.setItem('user',JSON.stringify(users));
          Alert.alert('user added successfully');
      }
      
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleIn = async() => {
    let users = [];
    try{
      users = await AsyncStorage.getItem('user');
      users = JSON.parse(users);
      let user = users.filter(i=>i.email === email);
      if(user.length >= 1){
        if(user[0].email === email && user[0].password === password){
          Alert.alert('User logged in successfully');
        }
        else{
          Alert.alert('Password wrong');
        }        
      }
      else{
        Alert.alert("Email dosen't exists");
      }
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <View style={styles.form}>
        <TextInput
            label='Email'
            placeholder='Enter Email'
            style={{margin:10}}
            onChangeText={(val)=>setEmail(val)}
        />
        <TextInput 
            label='password'
            placeholder='Enter password'
            style={{margin:10}}
            secureTextEntry
            onChangeText={(val)=>setpassword(val)}
        />

        <Button mode='contained' color='red' style={{margin:5}} onPress={handleIn}>SignIn</Button>
        <Button mode='contained' color='blue' style={{margin:5}} onPress={handleUp}>SignUp</Button>

    </View>
  )
}
