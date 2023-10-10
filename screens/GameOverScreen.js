import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../utils/Colors";
import Btn from "../components/ui/Btn";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  // let imageSize = 300;

  // if(width < 380){
  //   imageSize = 150;
  // }

  // if(height < 400){
  //   imageSize = 80
  // }

  // const imageStyle = {
  //   width: imageSize,
  //   height: imageSize,
  //   borderRadius: imageSize / 2
  // }

  let content = (
    <>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.gameOverImage}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone took <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <Btn onPress={onStartNewGame} style={styles.extraBtnStyle}>
        Start New Game
      </Btn>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <Title>Game Over!</Title>
        <View style={styles.gameOverScreenWidth}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/success.png")}
              style={[styles.gameOverImage, {}]}
            />
          </View>
          <View style={styles.gameOverTextBtn}>
            <Text style={styles.summaryText}>
              Your phone took{" "}
              <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
              guess the number
              <Text style={styles.highlight}> {userNumber}</Text>
            </Text>
            <Btn onPress={onStartNewGame} style={styles.extraBtnStyle}>
              Start New Game
            </Btn>
          </View>
        </View>
      </>
    );
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.gameOverContainer}>{content}</View>
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
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
    width: deviceWidth < 350 ? 150 : 250,
    height: deviceWidth < 350 ? 150 : 250,
    borderRadius: deviceWidth < 350 ? 75 : 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginTop: 20,
    marginBottom: 20,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  extraBtnStyle: {
    height: 45,
    width: 180,
  },
  gameOverScreenWidth: {
    flexDirection: "row",
  },
  gameOverTextBtn: {
    flex: 1,
    padding: 70,
    alignItems: "center",
  },
});
