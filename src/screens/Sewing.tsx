import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function ChildMinding({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
      <Text style={styles.courseDetails}>Fees:</Text>
        <Text style={styles.courseFees}>R1500.00</Text>
        <Text style={styles.courseDetails}>Purpose:</Text>
        <Text> To provide basic child and baby care.</Text>
        <Text style={styles.courseDetails}>Content:</Text>
        <Text>
           1. Birth to six month old baby needs{"\n"}
            2. Seven-month to one year old nedds{"\n"}
            3. Toddler needs{"\n"}
            4. Educational toys{"\n"}
        </Text>

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 