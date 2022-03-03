import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../Styles/Styles'

export default function Home({navigation}) {
        const pressHandler = () => {
        navigation.navigate("First_Basics")
        }
  return (
    <View style={styles.container}>
        <Text style={styles.bolder}>Home Component</Text>
        <Button title="go to Review" onPress={pressHandler} />
    </View>
  )
}
