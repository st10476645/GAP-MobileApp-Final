import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "../Stylesheet/Stylesheet"; 



export default function Homepage({ navigation }: { navigation: any }) {
  const [showLongCourses, setshowLongCourses] = useState(false); // Those lines indicate whether the sections are expanded or collapsed
  const [showShortCourses, setshowShortCourses] = useState(false); // The intial state is collapsed (false)

  // Function used to change the state of the buttons
  const LongCoursesClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // This line makes the animation of the button smooth
    setshowLongCourses(!showLongCourses); // This line changes the state of the the button
  };

  const ShortCoursesClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setshowShortCourses(!showShortCourses);
  };

  return (
    // Basically the whole page is a scroll view and it contains the history of the organization and the courses offered
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer} 
    >
      {/* Logo and Organization Info */}
      <View style={styles.header}>
        <View style={styles.logoContainer }>
          {/* Replace with actual logo image */}
          {/* <Image source={logo} style={styles.logo} /> */}
        </View>
        <Text style={styles.title}>Empowering the Nation</Text>
        <Text style={styles.description}>
          Founded in 2022, our organization has been dedicated to providing
          quality education and skill development programs to communities across
          South Africa. We believe in empowering individuals through practical
          knowledge and hands-on training.
        </Text>
        <Text style={styles.description}>
          Our vision is to create a society where everyone has access to
          education and opportunities for personal and professional growth,
          regardless of their background or circumstances.
        </Text>
         <Button
                title="Contact Details"
                onPress={() => {navigation.navigate("ContactDetails");
                }}
              />
      </View>

      {/* Courses Section */}
      <View>
        <Text style={styles.sectionTitle}>Offered courses</Text> 
        {/* Long Term Courses */}
        <View style={styles.courseCategory}>
          <TouchableOpacity
            style={styles.categoryHeader}
            onPress={LongCoursesClick}
          >
            <Text style={styles.categoryTitle}>Long Term Courses</Text>
            {/* This section reprsent the long courses button */}
            <Text style={styles.arrow}>
              {showLongCourses ? "▼" : "►"}
              {/* This line changes the arrow direction based on the state of the button */}
            </Text>
          </TouchableOpacity> 

          {showLongCourses && ( /* This line first checks if the state od the button is true (basically open) then shows the courses
                                   This block of code represents the courses under the long term courses section*/
            <View>
              <Button
                title="First Aid"
                onPress={() => {navigation.navigate("FirstAid");}}
              />
              <Button
                title="Sewing"
                onPress={() => {navigation.navigate("Sewing"); }}
              />
              <Button
                title="Landscaping"
                onPress={() => {navigation.navigate("Landscaping");}}
              />
              <Button
                title="Life Skills"
                onPress={() => {navigation.navigate("LifeSkills"); }}
              />
            </View>
          )}
        </View>

        {/* Short Term Courses */}
        <View style={styles.courseCategory}>
          <TouchableOpacity
            style={styles.categoryHeader}
            onPress={ShortCoursesClick}
          >
            <Text style={styles.categoryTitle}>Short Term Courses</Text>
            <Text style={styles.arrow}>{showShortCourses ? "▼" : "►"}</Text>
          </TouchableOpacity>

          {showShortCourses && (
// This block of code represents the courses under the short term courses section 
            <View> 
              <Button
                title="Child Minding"
                onPress={() => {navigation.navigate("ChildMinding"); }}
              />
              <Button
                title="Cooking"
                onPress={() => {navigation.navigate("Cooking");}}
              />
              <Button
                title="Garden Maintenance"
                onPress={() => {navigation.navigate("GardenMaintenance");
                }}
              />

            </View>
            
          )}
        </View>
        
      </View>
    </ScrollView>
  );
}
