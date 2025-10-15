import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function Cooking({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseDetails}>Cooking</Text>

         <Text style={styles.courseDetails}>Fees:</Text>
        <Text style={styles.courseFees}>R750.00</Text> 
        <Text style={styles.courseDetails}>Purpose:</Text>
        <Text> To prepare and cook nutritious family meals.</Text>
        <Text style={styles.courseDetails}>Content:</Text>
        <Text>
           1. Nutrional requirements for a healthy body{"\n"}
           2. Types of protein, carbohydrates and vegetables{"\n"}
           3. Planning meals{"\n"} 
            4. Preparation and cooking of meals{"\n"}


        </Text>  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 