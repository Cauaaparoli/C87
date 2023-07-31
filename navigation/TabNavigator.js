import React from "react";
import { BottomTabNavigator } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-native-paper";

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator
        screenOpitons={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Feed') {
                iconName = focused
                    ? 'book'
                    : 'book-outline';
            } else if (route.name === 'CreatePost') {
                iconName = focused ? 'create' : 'create-outline';
            }      
              return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="CriarPost" component={CreatePost} />

    </Tab.Navigator>
  );
}