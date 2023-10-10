import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../utils/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get('window').width;
export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary500,
        borderRadius: 6,
        marginHorizontal: 24,
        marginTop: deviceWidth < 350 ? 30 : 40,
        elevation: 8,
        padding: 12
      },
});
