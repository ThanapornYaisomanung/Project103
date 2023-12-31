import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ReviewsScreen } from '../pages/ReviewsScreen';
import { PostsScreen } from '../pages/PostsScreen';
import { FollowingScreen } from '../pages/FollowingScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Feed" 
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { 
            backgroundColor: '#D7385E',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius:20,
        },
        tabBarLabel:{
            backgroundColor: '#D7385E'
        },
        tabBarIndicatorStyle:{ backgroundColor: '#fff' , width:80, marginLeft:30, height:3}
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{ tabBarLabel: 'Posts' }}
      />
      <Tab.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{ tabBarLabel: 'Reviews' }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingScreen}
        options={{ tabBarLabel: 'Following' }}
      />
    </Tab.Navigator>
  );
}

const TabViewNavigator = ({ navigation }) => {
  return (

      <MyTabs />

  );
}
export {TabViewNavigator}
