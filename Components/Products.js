import React,{useState} from 'react'
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from '../Styles/Styles';
import Card from '../Styles/Card';
export default function Products({navigation}) {
    const [reviews, setReviews] = useState([
        {id: 1, title: 'wjnewekwmmwle', rating:5, body: 'lorem sdd'},
        {id: 2, title: 'dfdfjdmclkwd', rating:4, body: 'qqwq ipsum'},
        {id: 3, title: 'dwkalddqpav', rating:3, body: 'lorem werwe'},
        {id: 4, title: 'ojgitjjflkr', rating:4, body: 'qwqw ipsum'},
        {id: 5, title: 'weuhwdjwiew', rating:5, body: 'gyty ipsum'},
        {id: 6, title: 'thidnand', rating:4, body: 'lorem t8uyh'}
    ]);
  return (
    <View style={styles.container}>
        <FlatList 
        keyExtractor={(rev)=> rev.id}
        data={reviews}
        renderItem = {({item})=>(
            <Card>               
                <TouchableOpacity onPress={()=>navigation.navigate('Review_details', item)}>
                <Text style={{fontWeight:'bold',color:'black'}}>{item.title}</Text>
                </TouchableOpacity>
            </Card>
        )}
        />
    </View>
  )
}
