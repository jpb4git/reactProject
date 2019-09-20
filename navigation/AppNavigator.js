import React from 'React';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';


import SearchFormScreen from '../screens/SearchFormScreen';
import CityDetailScreen from '../screens/CityDetailScreen';



import {   createSwitchNavigator , createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';



const AuthStack = createStackNavigator({ signIn: IntroFormScreen, Welcome: IntroScreen });
const Homestack = createStackNavigator({ Home: HomeScreen, Detail: CityDetailScreen });
//const searchStack = createStackNavigator({ search: SearchFormScreen});

const MainApp = createBottomTabNavigator(
    {
        Home: {
            screen: Homestack,

            navigationOptions: {
                tabBarLabel: ' ' ,
                tabBarIcon: ({ tintColor }) => (<Icon name="home" size={30} color={tintColor} />),
                tabBarOptions: {
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: false
                }
            },
        },
        About: {
            screen:  SearchFormScreen,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({ tintColor }) => (<Icon name="plus-circle" size={30} color={tintColor} />),
                tabBarOptions: {
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: false
                }
            },
            
        },
        search: {
            screen: AboutScreen,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({ tintColor }) => (<Icon name="user" size={30} color={tintColor} />),
                tabBarOptions: {
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: false
                }
            }
        },
    }


)





export default createAppContainer(createSwitchNavigator(
    {  
        AuthLoading: AuthLoadingScreen,
        App: MainApp,
        Auth: AuthStack, 
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
