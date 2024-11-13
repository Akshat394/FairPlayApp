// FairPlayApp/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; // Ensure correct path
import AthleteDashboard from './screens/AthleteDashboard'; // Ensure correct path
import CoachDashboard from './screens/CoachDashboard'; // Ensure correct path
import DoctorDashboard from './screens/DoctorDashboard'; // Ensure correct path
import VirtualLobbyScreen from './screens/VirtualLobbyScreen'; // Ensure correct path

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AthleteDashboard" component={AthleteDashboard} />
        <Stack.Screen name="CoachDashboard" component={CoachDashboard} />
        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
        <Stack.Screen name="VirtualLobby" component={VirtualLobbyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}