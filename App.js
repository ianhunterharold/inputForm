import React from 'react';

import ColorList from './components/ColorList.js';
import ColorDetails from './components/ColorDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Navigator 
          screenOptions={{
          headerStyle: {
            height: 50,
            backgroundColor:'white',    
          }
        }}
      >
        <Screen 
        name="Home" 
        options ={{
          title:'Color List',
        }}
        component={ColorList}
        />
        <Screen name="Details" component={ColorDetails} />
        
      </Navigator>
    </NavigationContainer>
  )
}

