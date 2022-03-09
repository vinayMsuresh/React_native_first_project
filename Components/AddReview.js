import React from 'react';
import {View, TextInput,Button} from 'react-native';
import {Formik} from 'formik';
import styles from '../Styles/Styles';
const AddReview = ({addReview}) => {
    return (
        <View>
            <Formik
                initialValues={{title:'', body:'', rating:''}}
                onSubmit={(values)=>{
                    console.log(values);
                    addReview(values);
                }}
            >
                {(props)=>(
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={styles.input}
                            multiline
                            placeholder='Enter Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Review rating'
                            keyboardType='numeric'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Button title='submit' color='red' onPress={props.handleSubmit} />
                    </View>
                )
                }
                </Formik>
        </View>
    );
};

export default AddReview;