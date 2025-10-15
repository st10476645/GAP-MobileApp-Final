import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, Alert, Button } from "react-native";
import Checkbox from 'expo-checkbox'; //  npx expo install expo-checkbox 

import styles from "../Stylesheet/Stylesheet"; // Importing the styles from the Styles.tsx file


export default function Cart({ navigation }: { navigation: any }) { 

  
const [UserName, setUsername]= useState('') // Declaration of state variables. The will store the emails and passwords. ('') this basically mean it's empty at first
const [PhoneNumber, setPhoneNumber]= useState('') // setEmail and setPassword are functions that will change the state of the variable as the user input
const [Email, setEmail]= useState('') // The useState hook is used to declare state variables in functional components

const handleSubmit = () => {
  const hasSelectedCourse = CheckFees.some(fee => fee.checked); // Checks if at least one course is selected

  if (hasSelectedCourse) {
    Alert.alert("Form Sent", "Your contact details and course selections have been submitted.");
  } else {
    Alert.alert("Selection Required", "Please select at least one course before submitting.");
  }
};



type Fee = {name: string; price: number; checked: boolean}; // This tells typescript that the Fee object has three properties: name, price and checked

const initialFees: Fee[] = [ // The array of courses names and prices as well as the initial state of the checkboxes 
    {name:"First Aid", price: 1500, checked: false}, 
    {name:"Sewing", price: 1500, checked:false},
    {name:"Landscaping", price:1500, checked:false},
    {name:"Life skills", price:1500, checked:false},
    {name:"Child minding",price:750, checked:false},
    {name:"Cooking", price:750, checked:false},
    {name:"Garden Maintenance", price:750, checked:false}
]; 


const [CheckFees, setCheckFees] = useState<Fee[]>(initialFees); // State to manage the checkboxes

const toggleCheckbox = (name: string) => {
    setCheckFees(prevFees => prevFees.map( fee  => // This line maps through the array and toggles the checkbox state
        fee.name === name ? {...fee, checked: !fee.checked} : fee )
);
};

 const calculateTotal = () => {
    const selectedFees = CheckFees.filter(fee => fee.checked); // This line filters the array to only include the selected courses
    const baseTotal = selectedFees.reduce((sum, fee) => sum + fee.price, 0); // This line calculates the total price of the selected courses

      let discountRate =  0; // This will hold the variable for the discount rate
      const count = selectedFees.length; // This line counts the number of selected courses

      if (count === 2) discountRate = 0.05;
      else if (count === 3) discountRate = 0.10;
      else if (count > 3) discountRate = 0.15;

      const discountTotal = baseTotal * (1 - discountRate); // This line calculates the total price after applying the discount
      return discountTotal;  
  };
  const getDiscountRate = () => { // This function returns the discount rate based on the number of selected courses
    const count = CheckFees.filter(fee => fee.checked).length;
    if (count === 2) return 5;
    else if (count === 3) return 10;
    else if (count > 3) return 15;
    else return 0;
  }

return (
<ScrollView style={styles.scrollView}>


    <Text style={styles.sectionTitle}>Cart</Text> 
    {CheckFees.map(fee => ( // This line maps through the array and displays the courses with checkboxes)
        <View key={fee.name} style={styles.courseName}>
        <Checkbox
             value={fee.checked}
             onValueChange={() => toggleCheckbox(fee.name)}
             style={styles.CoursesCheckbox}/>
             <Text style={styles.courseFees}>
                {fee.name} - R{fee.price.toFixed(2)}
             </Text> 
        </View>
    ))}
    <Text style={styles.courseName}>Total: R{calculateTotal().toFixed(2)}</Text> 
    <Text style={styles.courseName}>Discount Rate: {getDiscountRate()}%</Text>
     {/* This line calculates and displays the total price of the selected courses discount included as well as the discount rate */}  


      <Text style={styles.sectionTitle}>User Details</Text>

<TextInput
  style={styles.input}
  placeholder="Enter your name"
  value={UserName}
  onChangeText={ setUsername}
/>

<TextInput
  style={styles.input}
  placeholder="Enter your Phone Number"
  value={PhoneNumber}
  onChangeText={setPhoneNumber}
  keyboardType="phone-pad"
/>

<TextInput
  style={styles.input}
  placeholder="Email"
  value={Email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>

<Button title="Submit Form" onPress={handleSubmit} />

</ScrollView>
)
} 

