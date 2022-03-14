import React from 'react'
import {TextInput, Button} from 'react-native-paper';
import {View} from 'react-native';
import styles from '../Styles/Styles';
export default function Login() {
  return (
    <View style={styles.form}>
        <TextInput
            label='Email'
            placeholder='Enter Email'
            style={{margin:10}}
        />
        <TextInput 
            label='password'
            placeholder='Enter password'
            style={{margin:10}}
        />

        <Button mode='contained' color='red' style={{margin:5}}>SignIn</Button>
        <Button mode='contained' color='blue' style={{margin:5}}>SignUp</Button>

    </View>
  )
}
