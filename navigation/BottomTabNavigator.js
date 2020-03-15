import * as React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Contacts from '../screens/Contacts';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Safety from '../screens/Safety';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) =>  <Text style={{fontSize: 13,
            color: focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }}>Home</Text>,
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="hospital-building" size={28} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} style={{paddingTop: 6}} />,
        }}
      />

      <BottomTab.Screen
        name="Safety"
        component={Safety}
        options={{
          tabBarLabel: ({ focused }) =>  <Text style={{fontSize: 13,
            color: focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }}>Safety Tips</Text>,
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="hand" size={28} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} style={{paddingTop: 6}} />,
        }}
      />

            <BottomTab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: ({ focused }) =>  <Text style={{fontSize: 13,
            color: focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }}>Hospitals</Text>,
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="hospital-marker" size={28} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} style={{paddingTop: 6}} />,
        }}
      />

      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          tabBarLabel: ({ focused }) =>  <Text style={{fontSize: 13,
            color: focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }}>Resources</Text>,
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="medical-bag" size={28} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} style={{paddingTop: 6}} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '🇹🇹COVID19TT';
    case 'Links':
      return 'Links to learn more';
    case 'Contacts':
        return 'Hospitals in Trinidad and Tobago';
  }
}
