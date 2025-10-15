import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//npm install @react-navigation/native-stack
//npm install --save-dev @types/react 

import { NavigationContainer } from "@react-navigation/native"; 

import Homepage from "./src/screens/Homepage";
import FirstAid from "./src/screens/FirstAid"; 
import Sewing from "./src/screens/Sewing";
import Landscaping from "./src/screens/Landscaping";
import LifeSkills from "./src/screens/LifeSkills";
import ChildMinding from "./src/screens/ChildMinding";
import Cooking from "./src/screens/Cooking";
import GardenMaintenance from "./src/screens/GardenMaintenance";
import Cart from "./src/screens/Cart";
import ContactDetails from "./src/screens/ContactDetails"; 

type RootStackParamList = {
  Homepage: undefined; 
  FirstAid: undefined; 
  Sewing: undefined; 
  Landscaping: undefined; 
  LifeSkills: undefined; 
  ChildMinding: undefined; 
  Cooking: undefined; 
  GardenMaintenance: undefined; 
  Cart: undefined; 
  ContactDetails: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//This is the data structure that holds the courses offered by the organization
export default function App(): React.ReactElement{
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }}/>
        <Stack.Screen name="FirstAid" component={FirstAid}/>
        <Stack.Screen name="Sewing" component={Sewing} />
        <Stack.Screen name="Landscaping" component={Landscaping} />
        <Stack.Screen name="LifeSkills" component={LifeSkills} />
        <Stack.Screen name="ChildMinding" component={ChildMinding} />
        <Stack.Screen name="Cooking" component={Cooking} />
        <Stack.Screen name="GardenMaintenance" component={GardenMaintenance} />
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="ContactDetails" component={ContactDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
} 