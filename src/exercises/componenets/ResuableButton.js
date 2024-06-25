import { StyleSheet, Text, View,TouchableOpacity } from "react-native";

const ReusableButton = ({ title, onClick }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#3291a8",
      padding: 50,
      borderRadius: 40,
      margin: 50,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
  });
  

  export default ReusableButton;