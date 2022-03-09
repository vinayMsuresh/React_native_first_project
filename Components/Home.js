import React,{useState} from 'react'
import { Text, View, Button,Modal, ImageBackground } from 'react-native'
import styles from '../Styles/Styles';
import { Ionicons } from '@expo/vector-icons'; 
import AddReview from './AddReview';

export default function Home({navigation}) {
  const [show, setShow] = useState(false);
        
  return (
    <View style={styles.container}>
      <Ionicons name="add-outline" size={24} style={styles.modalToggle} onPress={()=>setShow(true)} />
        <Modal visible={show}>
        <Ionicons name="close-outline" style={styles.modalToggle} size={24} onPress={()=>setShow(false)} />
        <AddReview addReview={(val) => console.log(val)}/>
        </Modal>
    </View>
  )
}
