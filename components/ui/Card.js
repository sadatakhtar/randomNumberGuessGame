import { StyleSheet, View } from "react-native";
import Colors from "../../utils/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary500,
        borderRadius: 6,
        marginHorizontal: 24,
        marginTop: 50,
        elevation: 8,
        padding: 12
      },
});
