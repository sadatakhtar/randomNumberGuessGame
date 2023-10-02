import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../utils/Colors";
import Btn from "../components/ui/Btn";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.gameOverContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.gameOverImage}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone took <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number 
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <Btn onPress={onStartNewGame} style={styles.extraBtnStyle}>Start New Game</Btn>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    padding: 40,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginTop: 20,
    marginBottom: 20,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  extraBtnStyle: {
    height: 45,
    width: 180
  }
});
