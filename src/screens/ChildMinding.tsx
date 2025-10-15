import React from "react";
import { View, Text,ScrollView, Button } from "react-native";
import styles from "../Stylesheet/Stylesheet"; 

export default function ChildMinding({ navigation }: { navigation: any }) {

  return (
  <ScrollView>
    <View>
        <Text style={styles.courseName}>Child Minding</Text>
        <Text style={styles.courseFees}>Fees:R750</Text>{/*style={styles.courseFees}styling for later*/}
        <Text style={styles.coursePurpose}>Purpose: To provide basic child and baby care.</Text>
        <Text>Content: 
           <Text>• Birth to six month old baby needs</Text>
           <Text>• Seven-month to one year old nedds</Text> 
           <Text>• Toddler needs</Text>
           <Text>• Educational toys</Text>
        </Text>{/*style={styles.courseContent}styling for later*/}  

        <Button 
           title="Go to Cart"
           onPress={() => {navigation.navigate("Cart");}}
         />

    </View>
  </ScrollView>
  );
} 