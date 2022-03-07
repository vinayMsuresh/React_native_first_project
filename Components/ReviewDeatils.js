import React,{useState} from 'react'
import {View,  Text} from 'react-native';
import styles from '../Styles/Styles';

export default function ReviewDeatils({route, navigation}) {
    const {title, body, rating} = route.params;
  return (
    <View style={styles.container}>

        <View style={styles.list}>
            <Text style={{fontWeight:'bold',color:'black'}}>Title: {title}</Text>
        </View>
        <View style={styles.list}>
            <Text style={{fontWeight:'bold',color:'black'}}>Body: {body}</Text>
        </View>
        <View style={styles.list}>
            <Text style={{fontWeight:'bold',color:'black'}}>Rating: {rating}</Text>
        </View>
    </View>
  )
}
