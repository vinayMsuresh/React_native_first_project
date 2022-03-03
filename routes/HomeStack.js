import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home';
import First_basics from '../Components/First_basics';
import React from 'react';
import Products from '../Components/Products';
import Todo from '../Components/Todo';
import ReviewDeatils from '../Components/ReviewDeatils';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="First_Basics" component={First_basics} options={{title: 'First page'}} />
        <Stack.Screen name="Reviews" component={Products} options={{title: 'Reviews'}} />
        <Stack.Screen name="Review_Details" component={ReviewDeatils} options={{title: 'Review_details'}} />
        <Stack.Screen name="Todo" component={Todo} options={{title: 'Todo'}} />
    </Stack.Navigator>

)
}
export default HomeStack;