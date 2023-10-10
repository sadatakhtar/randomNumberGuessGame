import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const GuessLogNumItem = ({ guessCount, guess }) => {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.logText}>#{guessCount}</Text>
      <Text style={styles.logText}>
        Opponent's guess: <Text style={styles.logNum}>{guess}</Text>
      </Text>
    </View>
  );
};

export default GuessLogNumItem;

const styles = StyleSheet.create({
  logContainer: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: "row",
    backgroundColor: Colors.primaryYellow,
    padding: 8,
    marginVertical: 4,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logText: {
    fontFamily: "open-sans",
    padding: 2
  },
  logNum: {
    color: Colors.primary300,
    fontFamily: "open-sans-bold",
  },
});
