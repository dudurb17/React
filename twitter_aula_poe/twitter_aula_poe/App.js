
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const PrincipalSatck = createNativeStackNavigator();

// You can import from local files
import TwitterList from './components/TwitterList';
import TwitterForm from './components/TwitterForm';
import ConfigTela from './components/ConfigTela';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
function PrincipalSatckScreen() {
  return (
    <PrincipalSatck.Navigator>
      <PrincipalSatck.Screen
        name="TwitterList"
        component={TwitterList}
        options={{ title: 'Listagem' }}
      />
      <PrincipalSatck.Screen
        name="TwitterForm"
        component={TwitterForm}
        options={{ title: 'Formulário' }}
      />
    </PrincipalSatck.Navigator>
  );
}
const ConfigSatck = createNativeStackNavigator();
function ConfigSatckScreen() {
  return (
    <ConfigSatck.Navigator>
      <ConfigSatck.Screen
        name="Config"
        component={ConfigTela}
        options={{ title: 'Configuracao do app' }}
      />
    </ConfigSatck.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={PrincipalSatckScreen} />
        
        <Tab.Screen
          name="Settings"
          component={ConfigSatckScreen}
          options={{
            tabBarLabel: 'Config',
            tabBarIcon: ({ color }) => (
              <Icon name=" user" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  div: {
    padding: 8,
  },
});
