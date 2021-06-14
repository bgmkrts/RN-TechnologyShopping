// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../pages/Home/Home";
import Login from "../pages/Login/index";
import Detail from '../pages/Detail/index';
import Basket from '../pages/Basket';



const Mobile = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Mobile.Navigator>
                <Mobile.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Mobile.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Mobile.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
                <Mobile.Screen name="Basket" component={Basket} options={{ headerShown: false }} />


            </Mobile.Navigator>
        </NavigationContainer>
    );
}

export default App;