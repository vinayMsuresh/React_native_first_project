import React, { useState } from 'react';
import styles from '../Styles/Styles';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../Styles/Card';

export default function List() {
    const [products, setProducts] = useState([
        {id: 1, name: 'Anjura'},
        {id: 2, name: 'Drakshi'},
        {id: 3, name: 'Utthutthe'},
        {id: 4, name: 'Karpura'},
        {id: 5, name: 'Udubatthi'},
        {id: 6, name: 'hoovu'},
        {id: 7, name: 'Hannu'},
        {id: 8, name: 'Kaayi'},
        {id: 9, name: 'Thatte'},
        {id: 10, name: 'Pathre'},
        {id: 11, name: 'Haalu'},
    ]);
    const deleteItem = (id) => {
        // console.log(id);
        setProducts(product=>{
            return product.filter(item=> item.id !== id)
        })
    }
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Top Products</Text>

        <FlatList 
        keyExtractor={(item)=> item.id}
        numColumns={2}
        data={products}
        renderItem = {({item})=>(
            <Card>
                <Text style={styles.bolder}>{item.name}</Text>
                <TouchableOpacity onPress={()=>deleteItem(item.id)}>
                <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
            </Card>
        )}
        />
        {/* <ScrollView>
            {products.map(item=>
                <View key={item.id} style={styles.list}>
                    <Text style={styles.bolder}>{item.name}</Text>
                    <View style={styles.btn}>
                    <Button title='Update' />
                    </View>
                </View>)}
        </ScrollView> */}
    </View>
  )
}

