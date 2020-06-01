import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from "../View/ViewLogin/loginScreen";
import RegisterScreen from "../View/register/Register";
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen'

import Colors from '../config/colors';

const Stack = createStackNavigator();

function mainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="App"
                    component={AppScreen}
                    options={{
                        title: 'App Main',
                        headerStyle: {
                            backgroundColor: Colors.appPrimary,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                            fontSize:25,
                        },
                    }}
                />
                <Stack.Screen
                    name="settings"
                    component={SettingScreen}
                    options={{title:'setting Screen'}}
                    />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        title: 'Register Form',
                        headerStyle: {
                            backgroundColor: Colors.appPrimary,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default mainNavigator;
