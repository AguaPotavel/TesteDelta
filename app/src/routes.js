import React from 'react';
import {
    SafeAreaView
} from './styles/global'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

const Stack = createNativeStackNavigator();

// import Home from './Views/Home'
import Login from './Views/Login'


export default function Routes(){
    const { colors } = useTheme();
    
    return(
        // <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                        headerTintColor: '#fff',
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Login} 
                        options={{
                            headerBackButtonMenuEnabled: true,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
        // </SafeAreaView>
    )
}