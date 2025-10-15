import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 


 
export default function FirstAid({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
       <Text style={styles.courseDetails}>Fees:</Text>
        <Text style={styles.courseFees}>R1500.00</Text>
        <Text style={styles.courseDetails}>Purpose:</Text>
        <Text> To provide first aid awareness and basic life support.</Text>
        <Text style={styles.courseDetails}>Content:</Text>
        <Text>
            1. Wounds and bleeding{"\n"}
            2. Burns and fractures{"\n"}
            3. Emergency scene management{"\n"}
            4. Cardio-Pulmonary Resusitation (CPR){"\n"}
            5. Respiratory distress e.g, Choking,blocked airway{"\n"}
      
        </Text>   
        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 