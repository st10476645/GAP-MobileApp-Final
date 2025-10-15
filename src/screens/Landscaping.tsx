import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function Landscaping({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseDetails}>Fees:</Text>
        <Text style={styles.courseFees}>R1500.00</Text>
        <Text style={styles.courseDetails}>Purpose:</Text>
        <Text>To provide landscaping services for new and establish gardens.</Text>
        <Text style={styles.courseDetails}>Content:</Text>
        <Text>
          1. Indigenous and exotic plants and trees{"\n"}
          2. Fixed structures(fountains, statues, benches, tables,built-in braai){"\n"}
          3. Balancing of plants and trees in a garden{"\n"}
          4. Aesthetics of plants shapes and colors{"\n"}
          5. Garden layout{"\n"}
        </Text>  


          

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 