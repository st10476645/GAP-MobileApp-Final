import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function LifeSkills ({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseName}>Life Skills</Text>
        <Text style={styles.courseFees}>Fees:R1500</Text>{/*style={styles.courseFees}styling for later*/}
        <Text style={styles.coursePurpose}>Purpose: To provide skills to navigate basic life necessities.</Text>
        <Text>Content: 
           <Text>• Opening a bank account</Text>
           <Text>• Basic labour law(know your rights)</Text> 
           <Text>• Basic reading and writting literacy</Text>
           <Text>• Basic numeric literacy</Text>
        </Text>{/*style={styles.courseContent}styling for later*/}  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 