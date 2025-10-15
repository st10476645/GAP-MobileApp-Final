import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function GardenMaintenance({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseDetails}>Fees:</Text>
        <Text style={styles.courseFees}>R750.00</Text>
        <Text style={styles.courseDetails}>Purpose:</Text>
        <Text>To provide basic knowledge of watering, pruning in a domestic garden.</Text>
        <Text style={styles.courseDetails}>Content:</Text>
        <Text>
          1.Water restrictions and the watering requirements of indigemous and exotic plants{"\n"}
          2.Pruning and propagation of plants{"\n"}
          3.Planting techniques for different plant types{"\n"}
        </Text>

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 