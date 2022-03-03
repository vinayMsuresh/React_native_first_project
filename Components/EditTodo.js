import React,{useState} from 'react'
import { Button, View, TextInput } from 'react-native'
import styles from '../Styles/Styles'

export default function EditTodo({editTodo, val}) {
    const [text, setText] = useState(val);
  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input} 
      placeholder='Enter task name'
      onChangeText={(value)=>setText(value)}
      value={text}
      />
    
    <Button title='Update todo' color='green' onPress={()=>editTodo(text)} />

    </View>
  )
}
