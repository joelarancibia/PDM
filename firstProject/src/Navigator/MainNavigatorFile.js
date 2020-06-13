import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import LoginScreen from "../View/ViewLogin/loginScreen";
import RegisterScreen from "../View/register/Register";
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen'
import {ContextLogin} from '../config/Context';

import Colors from '../config/colors';

const Stack = createStackNavigator();
const StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
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
    );
}

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='App'
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
                        fontSize: 25
                    },
                }}
            />
            <Drawer.Screen
                name="Setting"
                component={SettingScreen}
                options={{title: 'Settings'}}
            />
        </Drawer.Navigator>
    );
}


const mainNavigator = () => {
    const [isLogged, setIsLogged] = React.useState(false);
    const contextLogin = React.useMemo(() => {
        return {
            loginUser: () => {
                console.log('loginApp')
                setIsLogged(true);
            },
            logoutUser: () => {
                setIsLogged(false);
            }
        }
    });

    return (
        <NavigationContainer>
            {isLogged ? (
                <StackScreen />
            ) : (
                <DrawerScreen />
            )}
        </NavigationContainer>
    );
}

export default mainNavigator;