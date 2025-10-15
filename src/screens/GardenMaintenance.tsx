import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function GardenMaintenance({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseName}>Garden Maintenance</Text>
        <Text style={styles.courseFees}>Fees:R750</Text>{/*style={styles.courseFees}styling for later*/}
        <Text style={styles.coursePurpose}>Purpose: To provide basic knowledge of watering, pruning in a domestic garden.</Text>
        <Text>Content: 
           <Text>• Water restrictions and the watering requirements of indigemous and exotic plants</Text>
           <Text>• Pruning and propagation of plants</Text> 
           <Text>• Planting techniques for different plant types</Text>
        </Text>{/*style={styles.courseContent}styling for later*/}  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 