import React,{useState} from 'react'
import {View, TouchableOpacity, FlatList, Text, Modal} from 'react-native';
import styles from '../Styles/Styles';
import Card from '../Styles/Card';
import AddReview from './AddReview';
import { Ionicons } from '@expo/vector-icons'; 

export default function Products({navigation}) {
    const [show, setShow] = useState(false);
    const [reviews, setReviews] = useState([
        {id: 1, title: 'wjnewekwmmwle', rating:5, body: 'lorem sdd'},
        {id: 2, title: 'dfdfjdmclkwd', rating:2, body: 'qqwq ipsum'},
        {id: 3, title: 'dwkalddqpav', rating:3, body: 'lorem werwe'},
        {id: 4, title: 'ojgitjjflkr', rating:4, body: 'qwqw ipsum'},
        {id: 5, title: 'weuhwdjwiew', rating:5, body: 'gyty ipsum'},
        {id: 6, title: 'thidnand', rating:4, body: 'lorem t8uyh'}
    ]);
    const addReview = (itm) => {
        let id = reviews.length + 1;
        itm.id = id;
        setReviews([...reviews, itm]);
        setShow(false);
    }
  return (
    <View style={styles.container}>
        <Ionicons name="add-outline" size={24} style={styles.modalToggle} onPress={()=>setShow(true)} />
        <Modal visible={show}>
        <Ionicons name="close-outline" style={styles.modalToggle} size={24} onPress={()=>setShow(false)} />
        <AddReview addReview={addReview}/>
        </Modal>
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
