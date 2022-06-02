import React from "react";
import { SafeAreaView } from "./styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

const Stack = createNativeStackNavigator();

// import Home from './Views/Home'
import Student from "./Views/Student";
import Home from "./Views/Home";

export default function Routes() {
  const { colors } = useTheme();

  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Student"
          component={Student}
          options={{
            headerBackButtonMenuEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // </SafeAreaView>
  );
}
