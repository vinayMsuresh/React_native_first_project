import React from 'react';
import { View} from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialIcons, Entypo  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
// import Card from '../Styles/Card';


export default function TodoItem({item, deleteTodo, edit}) {

  const LeftContent = props => <AntDesign name="caretright" size={24} color="blue" />
  const RightContent = props => (<View style={{flexDirection:'row'}}>
    <Entypo name="edit" size={24} color="black" style={{marginRight:20}} onPress={()=>edit(item)}/>
          <MaterialIcons name="delete" size={24} color="black" onPress={()=>deleteTodo(item.id)} />
    </View>);

  return (

    <Card>
      <Card.Title title={item.task} left={LeftContent} right={RightContent} />
    </Card>

  )
}
