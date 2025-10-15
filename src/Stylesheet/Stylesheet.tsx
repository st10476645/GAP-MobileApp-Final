import { StyleSheet } from "react-native";
// This is the styleshheet file for the entire app
const styles = StyleSheet.create({
      // Start of the styling for the homepage 
  container: { // container for the entire app(first level )
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: { // scroll view for pages that need scrolling(homepage and cart)
    flex: 1,
  },
  contentContainer: { // needs this one for the scroll view to work properly
    padding: 16,
    paddingBottom: 32,
  },
  header: { // header section of the homepage
    alignItems: "center",
    marginBottom: 24,
  },
  logoContainer: { // logo container in the header section of the homepage
    width: 120,
    height: 120,
    backgroundColor: "#e1e8ed",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: { // title text in the header section of the homepage
    fontSize: 24,
    fontWeight: "bold",
    color: "#1c2938",
    marginBottom: 12,
  },
  description: { // small text in the header fot=r the description of the organization
    fontSize: 16,
    color: "#4a5568",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 12,
  },
  sectionTitle: { // The title of sections used in homepage and cart 
    fontSize: 22,
    fontWeight: "bold",
    color: "#1c2938",
    marginBottom: 16,
    textAlign: "center",
  },
  courseCategory: { // The container for each course category (long term and short term)
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    }, 
    shadowOpacity: 0.1, // Adjusted for a lighter shadow 
    shadowRadius: 3,
    elevation: 3,
    overflow: "hidden",
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4a6da7",
  },
  categoryTitle: { // The text for the long term and short term courses buttons
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  arrow: { // The arrow next to the long term and short term courses buttons
    fontSize: 18,
    color: "white",
  }, // End of the styling for the homepage


  // Start of the styling for the courses pages 
  
  courseDetails: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 8,
    alignItems: "center",
    textAlign: "center", 
  },
  courseFees: {
    fontSize: 14,
    color: "#2d3748",
  },
  coursePurpose: {
    fontSize: 14,
    color: "#2d3748", 
  },
  AddButton: {
    backgroundColor: '#4a6da7',
    padding: 10,
    borderRadius: 10,
    borderColor: '#007fff',
    borderWidth: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  //Cart styling 
  CoursesCheckbox: {
    fontSize: 24, 
    fontWeight: "bold",
    color: "#1c2938",
    marginBottom: 12,
    alignContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor:'#007fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }, 
  
}); 
export default styles;
// End of the styling 

