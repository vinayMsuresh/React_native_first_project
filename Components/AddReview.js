import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import Button from './Button';
import styles from '../Styles/Styles';
import * as yup from 'yup';

const reviewValid = yup.object({
    title:yup.string()
    .required()
    .min(3),
    body:yup.string()
    .required()
    .min(5),
    rating:yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be number between 1 and 5', (val) => {
        return parseInt(val) > 0 && parseInt(val) < 6;
    })
})
const AddReview = ({addReview}) => {
    return (
        <View>
            <Formik
                initialValues={{title:'', body:'', rating:''}}
                validationSchema = {reviewValid}
                onSubmit={(values, actions)=>{
                    addReview(values);
                    actions.resetForm();
                }}
            >
                {(props)=>(
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />

                        <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            style={styles.input}
                            multiline
                            placeholder='Enter Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />

                        <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Review rating'
                            keyboardType='numeric'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />

                        <Text style={styles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <Button text='submit' color='red' onPress={props.handleSubmit} />
                    </View>
                )
                }
                </Formik>
        </View>
    );
};

export default AddReview;