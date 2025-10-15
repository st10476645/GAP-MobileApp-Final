import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 


 
export default function FirstAid({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseName}>First Aid</Text>
        <Text style={styles.courseFees}>Fees:R1500</Text>{/*style={styles.courseFees}styling for later*/}
        <Text style={styles.coursePurpose}>Purpose: To provide first aid awareness and basic life support.</Text>
        <Text>Content: 
           <Text>• Wounds and bleeding </Text>
           <Text>• Burns and fractures</Text> 
           <Text>• Emergency scene management</Text>
           <Text>• Cardio-Pulmonary Resusitation (CPR)</Text>
           <Text>• Respiratory distress e.g, Choking,blocked airway</Text>
        </Text>{/*style={styles.courseContent}styling for later*/}  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 