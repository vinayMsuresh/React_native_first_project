import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../Styles/Styles';
const Button = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;