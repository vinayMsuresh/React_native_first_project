import React,{useState} from 'react'
import {View,  Text, Image} from 'react-native';
import Card from '../Styles/Card';
import styles,{images} from '../Styles/Styles';

export default function ReviewDeatils({route, navigation}) {
    const {title, body, rating} = route.params;
  return (
    <View style={styles.container}>
        <Card>

            <Text style={{fontWeight:'bold',color:'black'}}>Title: {title}</Text>
            <Text style={{fontWeight:'bold',color:'black'}}>Body: {body}</Text>
        <View style={styles.rate}>
            <Text style={{fontWeight:'bold',color:'black'}}>Rating: </Text>
            <Image source={images.rating[rating]} />
        </View>
        </Card>
    </View>
  )
}
