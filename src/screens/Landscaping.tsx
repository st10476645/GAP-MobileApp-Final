import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function Landscaping({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseName}>Landscaping</Text>
        <Text style={styles.courseFees}>Fees:R1500</Text>{/*style={styles.courseFees}styling for later*/}
        <Text style={styles.coursePurpose}>Purpose: To provide landscaping services for new and establish gardens.</Text>
        <Text>Content: 
           <Text>• Indigenous and exotic plants and trees</Text>
           <Text>• Fixed structures(fountains, statues, benches, tables,built-in braai)</Text> 
           <Text>• Balancing of plants and trees in a garden</Text>
           <Text>• Aesthetics of plants shapes and colors</Text>
           <Text>• Garden layout</Text> 
        </Text>{/*style={styles.courseContent}styling for later*/}  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 