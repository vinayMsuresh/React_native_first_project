import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../Styles/Styles'

export default function Home({navigation}) {
        const pressHandler = () => {
        navigation.navigate("First_Basics")
        }
  return (
    <View style={styles.container}>
        <Button title="go to First_page" onPress={pressHandler} />
        <Button title="go to Reviews" onPress={()=>navigation.navigate('Reviews')} />
        <Button title="Todo" onPress={()=>navigation.navigate('Todo')} />
    </View>
  )
}
