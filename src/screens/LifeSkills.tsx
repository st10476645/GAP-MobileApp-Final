import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function LifeSkills ({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseDetails}>Fees:</Text>
        <Text style={styles.courseFees}>R1500.00</Text>
        <Text style={styles.courseDetails}>Purpose:</Text>
        <Text>To provide skills to navigate basic life necessities.</Text>
         <Text style={styles.courseDetails}>Content:</Text>
        <Text>
          1. Opening a bank account{"\n"}
          2. Basic labour law(know your rights){"\n"}
          3. Basic reading and writting literacy{"\n"}
          4. Basic numeric literacy{"\n"}
        </Text>



        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 