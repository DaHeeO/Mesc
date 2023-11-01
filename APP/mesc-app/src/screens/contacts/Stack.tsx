import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Contacts from './Contacts';
import Detail from './Detail';
import Group from './Group';

const Stack = createStackNavigator();

function ContactsStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Group"
          component={Group}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContactsStack;
