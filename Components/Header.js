import React from 'react'
import {View, Text,Image, ImageBackground} from 'react-native';
import styles from '../Styles/Styles';

export default function Header({title}) {
  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.header}>      
        <Text style={styles.bolder}>{title}</Text>
        <Image source={require('../assets/rating-1.png')} />
    </ImageBackground>
  )
}
