import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../utils/Colors";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.titleContainer}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;
export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 1,
    padding: 12,
    textAlign: "center",
    borderColor: Colors.white,
    fontSize: deviceWidth < 350 ? 22 : 24,
    fontFamily: 'open-sans-bold',
    color: Colors.white,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    maxWidth: '80%',
    width: 300
  },
});
