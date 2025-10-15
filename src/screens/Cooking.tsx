import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function Cooking({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseName}>Cooking</Text>
        <Text style={styles.courseFees}>Fees:R750</Text>{/*style={styles.courseFees}styling for later*/}
        <Text style={styles.coursePurpose}>Purpose: To prepare and cook nutritious family meals.</Text>
        <Text>Content: 
           <Text>• Nutrional requirements for a healthy body</Text>
           <Text>• Types of protein, carbohydrates and vegetables</Text> 
           <Text>• Planning meals</Text>
           <Text>• Preparation and cooking of meals</Text>
        </Text>{/*style={styles.courseContent}styling for later*/}  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 