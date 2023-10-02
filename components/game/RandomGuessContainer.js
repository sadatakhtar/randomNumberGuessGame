import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/Colors";

const RandomGuessContainer = ({ children }) => {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>{children}</Text>
    </View>
  );
};

export default RandomGuessContainer;

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 4,
    borderColor: Colors.primaryYellow,
    borderRadius: 8,
    marginVertical: 40,
    marginHorizontal: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  guessText: {
    color: Colors.primaryYellow,
    fontSize: 36,
    padding: 24,
    fontFamily: "open-sans-bold",
  },
});
