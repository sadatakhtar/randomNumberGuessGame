import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/Colors";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.titleContainer}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 1,
    padding: 12,
    textAlign: "center",
    borderColor: Colors.white,
    fontSize: 26,
    fontFamily: 'open-sans-bold',
    // fontWeight: "bold",
    color: Colors.white,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
  },
});
