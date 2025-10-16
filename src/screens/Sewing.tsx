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
        <Text> To provide alterations and new garment tailoring services.</Text>
        <Text style={styles.courseDetails}>Content:</Text>
        <Text>
           1.Types of stiches{"\n"}
           2.Theading a sewing machine{"\n"}
           3.Sewing buttons,zips,hems and seams{"\n"}
           4.Designing and sewing new garments{"\n"} 
        </Text>

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 