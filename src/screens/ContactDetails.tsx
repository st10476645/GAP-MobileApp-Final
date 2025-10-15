import React from "react";
import { ScrollView, Text, View } from "react-native";
import { WebView } from "react-native-webview";  // Importing the WebView component to display maps
import styles from "../Stylesheet/Stylesheet";

export default function ContactDetails({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.sectionTitle}>Contact Details</Text>

        <Text style={styles.sectionTitle}>Phone</Text>
        <Text style={styles.coursePurpose}>+27 123 456 7890</Text>

        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.coursePurpose}>Empoweringthenation@gmail.com</Text>

        <Text style={styles.sectionTitle}>Our Locations</Text>

        <Text style={styles.sectionTitle}>Address One</Text>
        <WebView
          style={{ height: 400, width: "100%" }}
          source={{ uri: "https://maps.app.goo.gl/wf5GwRz3qnWWyPkR6" }}
        />

        <Text style={styles.sectionTitle}>Address Two</Text>
        <WebView
          style={{ height: 400, width: "100%" }}
          source={{ uri: "https://maps.app.goo.gl/URpprjSAmjrLi4b26" }}
        />

        <Text style={styles.sectionTitle}>Address Three</Text>
        <WebView
          style={{ height: 400, width: "100%" }}
          source={{ uri: "https://maps.app.goo.gl/FYyc7vF6tW57BmT26" }} // adresses of the organization 
        />
      </View>
    </ScrollView>
  );
}
