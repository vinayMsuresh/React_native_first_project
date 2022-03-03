import React,{useState} from 'react'
import { Button, View, TextInput } from 'react-native'
import styles from '../Styles/Styles'

export default function AddTodo({addTodo}) {
    const [text, setText] = useState('');
  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input} 
      placeholder='Enter task name'
      onChangeText={(value)=>setText(value)}
      />
    
    <Button title='Add todo' color='green' onPress={()=>addTodo(text)} />

    </View>
  )
}
