import React from 'react';
import styles from '../Styles/Styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Entypo  } from '@expo/vector-icons'; 
import Card from '../Styles/Card';

export default function TodoItem({item, deleteTodo, edit}) {
  return (
    <View style={styles.todo}>      
        <Text style={styles.task}>{item.task}</Text>
        <View style={{flexDirection:'row'}}>
        <Entypo name="edit" size={24} color="black" style={{marginRight:20}} onPress={()=>edit(item)}/>
        <MaterialIcons name="delete" size={24} color="black" onPress={()=>deleteTodo(item.id)} />
        </View>
        {/* <TouchableOpacity onPress={()=>deleteTodo(item.id)}>
        <Text style={styles.delText}>Delete</Text>
        </TouchableOpacity> */}
       
    </View>
  )
}
