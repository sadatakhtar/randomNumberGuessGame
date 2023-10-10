import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../utils/Colors";

const RandomGuessContainer = ({ children }) => {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>{children}</Text>
    </View>
  )
};

const deviceWidth = Dimensions.get('window').width;

export default RandomGuessContainer;

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 4,
    borderColor: Colors.primaryYellow,
    borderRadius: 8,
    marginVertical: deviceWidth < 350 ? 40 : 6,
    marginHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  guessText: {
    color: Colors.primaryYellow,
    fontSize: deviceWidth < 350 ? 24 : 36,
    padding: 24,
    fontFamily: "open-sans-bold",
  },
});
