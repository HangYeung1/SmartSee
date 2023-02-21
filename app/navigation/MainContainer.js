import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import CameraScreen from "./screens/CameraScreen";
import SearchScreen from "./screens/SearchScreen";
import RecentsScreen from "./screens/RecentsScreen";

// Screen tab names
const searchStackName = "SearchStack";
const cameraStackName = "CameraStack";
const recentsStackName = "RecentsStack";

// Search screen stack names
const searchName = "Search";

// Camera screen stack names
const cameraName = "Camera";

// Recents screen stack names
const recentsName = "Recents";

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={searchName} component={SearchScreen} />
    </Stack.Navigator>
  );
}

function CameraStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={cameraName} component={CameraScreen} />
    </Stack.Navigator>
  );
}

function RecentsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={recentsName} component={RecentsScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={cameraStackName}
        screenOptions={
          // Tab bar styling
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let routeName = route.name;

              if (routeName === cameraStackName) {
                iconName = focused ? "camera" : "camera-outline";
              } else if (routeName === searchStackName) {
                iconName = focused ? "search" : "search-outline";
              } else if (routeName === recentsStackName) {
                iconName = focused ? "time" : "time-outline";
              }
              return <Ionicons name={iconName} size={size + 5} color={color} />;
            },
            tabBarLabel: ({ focused, color }) => {
              let label;
              let routeName = route.name;

              if (routeName === cameraStackName) {
                label = "Camera";
              } else if (routeName === searchStackName) {
                label = "Search";
              } else if (routeName === recentsStackName) {
                label = "Recents";
              }
              return (
                <Text
                  style={{
                    color: color,
                    fontSize: 10,
                    marginTop: -10,
                    fontWeight: focused ? "bold" : "normal",
                  }}
                >
                  {label}
                </Text>
              );
            },
            tabBarStyle: {
              height: 90,
              backgroundColor: "black",
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: "mediumseagreen",
            tabBarInactiveTintColor: "darkgrey",
            headerShown: false,
          })
        }
      >
        <Tab.Screen name={searchStackName} component={SearchStack} />
        <Tab.Screen name={cameraStackName} component={CameraStack} />
        <Tab.Screen name={recentsStackName} component={RecentsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
