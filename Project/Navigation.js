import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InstaStory from './instastory';
import App from '../Tugas3';
import Ternary from '../Tugas4';
import ContactDetails from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={InstaStory} options={{headerShown:false, tabBarIcon: () => (<Ionicons name="home" size={30} color={'black'}/>)}} />
      
      <Tab.Screen name="Score Tester" component={Ternary} options={{tabBarIcon: () => (<Ionicons name="md-calculator-outline" size={30} color={'black'}/>)}}/>

      <Tab.Screen name="Game" component={App} options={{tabBarIcon: () => (<Ionicons name="game-controller-outline" size={30} color={'black'}/>)}}/>

      <Tab.Screen name="Profile" component= {ContactDetails} options={{tabBarIcon: () => (<Image style={{width : 30, height : 30,borderRadius : 35,borderColor : 'black'}} source = {require('../images/profile.jpg')}/>)}}/>
    </Tab.Navigator>
  );
}

export default function Naviga() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
