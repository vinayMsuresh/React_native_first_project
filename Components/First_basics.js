import React,{useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from '../Styles/Styles';

export default function First_basics({navigation}) {
  const [name, setName] = useState('Vinay S');
  const [person, setPerson] = useState({name:'Vinay', age:25});
  const [age, setAge] = useState(20);
    const pushHandler = () => {
    navigation.navigate("Home")
    }

  const onClick = () =>{
    setName('');
    setAge('');
    setPerson({name:name, age:age})
  }
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.bolder}>Introduction App</Text>
    </View>
    <View style={styles.body}>
      <Text>Name is {person.name} and Age is {person.age}</Text>  
    </View>
    

    <View style={styles.form}>
      <Text>Enter name</Text>
      <TextInput
      style={styles.input} 
      placeholder='e.g Vinay S'
      onChangeText={(value)=>setName(value)}
      value={name}/>

      <Text>Enter Age</Text>
      <TextInput
      style={styles.input} 
      placeholder='e.g 20'
      keyboardType='numeric'
      onChangeText={(value)=>setAge(value)}
      value={age.toString()}/>

<Button title='Update' onPress={()=>onClick()} />

<Button title="go to home PUSH" onPress={pushHandler} />

    </View>
    
    </View>
  );
}


