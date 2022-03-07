import React from 'react'
import {View, Text} from 'react-native';
import styles from '../Styles/Styles';

export default function Header({title}) {
  return (
    <View style={styles.header}>
        <Text style={styles.bolder}>{title}</Text>
    </View>
  )
}
