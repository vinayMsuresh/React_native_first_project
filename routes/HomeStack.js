import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home';
import First_basics from '../Components/First_basics';
import React from 'react';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="First_Basics" component={First_basics} />
    </Stack.Navigator>

)
}
export default HomeStack;