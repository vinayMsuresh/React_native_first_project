import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../Components/Products";
import ReviewDeatils from "../Components/ReviewDeatils";

const Stack = createNativeStackNavigator();
const ReviewStack = () => {
    return(
    <Stack.Navigator initialRouteName="Review">
        <Stack.Screen name="Review" component={Products} options={{ headerShown: false}} />
        <Stack.Screen name="Review_details" component={ReviewDeatils}  />    
    </Stack.Navigator> 
    );
}

export default ReviewStack;