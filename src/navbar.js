import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from './screens/About'
import InstructorHomeScreen from './screens/InstructorHomeScreen'
import Standards from './screens/Standards'
import ActivityStack from './ActivityStack'
import ActivityStackStudent from './ActivityStackStudent'
import Settings from './screens/Settings'
import { ThemeConsumer } from 'react-native-elements'

const Tab = createBottomTabNavigator()
const headerColor = 'white'
const headerTextColor = 'red'
// const iconActiveColor = '#04f260'
const iconActiveColor = global.secondary
const iconNotActiveColor = '#d6d6d6'
const iconDimension = 30

const Navbar = ({navigation,route}) =>
{
    const {Role} = route.params;
    console.log(Role);

    if (Role == 1){
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#0e1b34',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 85,
                        ...styles.shadow
                    }
                }}>
                <Tab.Screen
                    name='HomeScreen'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/Home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>Home</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        },
                    }}
                    //if 
                    component={ActivityStack} />
    
                <Tab.Screen
                    name='Standards'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/Standards.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>Standards</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        }
                    }}
                    component={Standards} />
    
                <Tab.Screen
                    name='About'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/About.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>About</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        }
                    }}
                    component={About} />
    
    
                <Tab.Screen
                    name='Settings'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/Settings.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>Settings</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        }
                    }}
                    component={Settings} />
            </Tab.Navigator>
        )
    }else{
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#0e1b34',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 85,
                        ...styles.shadow
                    }
                }}>
                <Tab.Screen
                    name='HomeScreen'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/Home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>Home</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        },
                    }}
                    //if 
                    component={ActivityStackStudent} />
    
                <Tab.Screen
                    name='Standards'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/Standards.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>Standards</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        }
                    }}
                    component={Standards} />
    
                <Tab.Screen
                    name='About'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/About.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>About</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        }
                    }}
                    component={About} />
    
    
                <Tab.Screen
                    name='Settings'
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Image
                                    source={require('./assets/icons/Settings.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: iconDimension,
                                        height: iconDimension,
                                        tintColor: focused ? iconActiveColor : iconNotActiveColor
                                    }}
                                />
                                <Text style={{ color: focused ? iconActiveColor : iconNotActiveColor, fontSize: 12 }}>Settings</Text>
                            </View>),
                        headerStyle: {
                            backgroundColor: headerColor
                        },
                        headerTitleStyle: {
                            color: headerTextColor
                        }
                    }}
                    component={Settings} />
            </Tab.Navigator>
        )



    }

   
}

export default Navbar

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#283654',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5
    }
})
