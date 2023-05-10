import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
import XboxList from './components/XboxList';
import Inicio from './components/Inicio';
import XboxForm from './components/XboxForm';

import NotificacaoList from './components/NotificacaoList';
import InfXbox from './components/InfXbox';

const InicioStack = createNativeStackNavigator();

function InicioStackScreen() {
  return (
    <InicioStack.Navigator>
      <InicioStack.Screen
        name="Inicio"
        component={Inicio}
       options={{
          title: 'Forúm dos guri',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <InicioStack.Screen
        name="InfXbox"
        component={InfXbox}
       options={{
          title: 'História',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </InicioStack.Navigator>
  );
}


const PricipalStack = createNativeStackNavigator();

function PrincipalStackScreen() {
  return (
    <PricipalStack.Navigator>
      <PricipalStack.Screen
        name="XboxList"
        component={XboxList}
        
       options={{
          title: 'Listagem dos guri',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}
        
      />
      <PricipalStack.Screen
        name="XboxForm"
        component={XboxForm}
        options={{
          title: 'Formulário',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      
    </PricipalStack.Navigator>
  );
}

const NotificacaoStack = createNativeStackNavigator();

function NotificacaoStackScreen() {
  return (
    <NotificacaoStack.Navigator>
      <NotificacaoStack.Screen
        name="Config"
        component={NotificacaoList}
       options={{
          title: 'Jogos do XBOX',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </NotificacaoStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Inicio"
          component={InicioStackScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <Icon name="play" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="inicio"
          component={PrincipalStackScreen}
          options={{
            tabBarLabel: 'Posts',
            tabBarIcon: ({ color }) => (
              <Icon name="archive" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Listagem dos Guri"
          component={NotificacaoStackScreen}
          options={{
            tabBarLabel: 'Listagem dos Guri',
            tabBarIcon: ({ color }) => (
              <Icon name="gamepad" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}
