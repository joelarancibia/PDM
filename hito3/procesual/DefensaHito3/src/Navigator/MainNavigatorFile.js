import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from "../View/ViewLogin/loginScreen";

import RegisterScreen from '../View/register/Register';
import PdmScreen from '../View/onboarding/PdmScreen';
import HitScreen from '../View/onboarding/DefensaHito3Screen';
import FireScreen from '../View/onboarding/FirebaseScreen';

import Colors from '../config/colors';

const Stack = createStackNavigator();

function mainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen
                    name="PDM"
                    component={PdmScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name= "HIT"
                    component={HitScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Fire"
                    component={FireScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'login Form',
                        headerStyle: {
                            backgroundColor: Colors.azul,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}

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
