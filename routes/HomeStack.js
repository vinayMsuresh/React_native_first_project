// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Components/Home';
import First_basics from '../Components/First_basics';
import React from 'react';
// import Products from '../Components/Products';
import Todo from '../Components/Todo';
// import ReviewDeatils from '../Components/ReviewDeatils';
import ReviewStack from './ReviewStack';
import Header from '../Components/Header';
import Login from '../Components/Login';
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
return (

    // <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    //     <Stack.Screen name="First_Basics" component={First_basics} options={{title: 'First page'}} />
    //     <Stack.Screen name="Reviews" component={Products} options={{title: 'Reviews'}} />
    //     <Stack.Screen name="Review_Details" component={ReviewDeatils} options={{title: 'Review_details'}} />
    //     <Stack.Screen name="Todo" component={Todo} options={{title: 'Todo'}} />
    // </Stack.Navigator>
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} options={{headerTitle: ()=><Header title={'Home'} />}} />
    <Drawer.Screen name="First_Basics" component={First_basics} options={{headerTitle: ()=><Header title={'First'} />}} />
    <Drawer.Screen name="Reviews" component={ReviewStack} options={{headerTitle: ()=><Header title={'Review'} />}} />
    <Drawer.Screen name="Todo" component={Todo} options={{headerTitle: ()=><Header title={'Todo'} />}} />
    <Drawer.Screen name='login' component={Login} options={{headerTitle: ()=><Header title={'Login'} />}} />
</Drawer.Navigator>

)
}
export default HomeStack;