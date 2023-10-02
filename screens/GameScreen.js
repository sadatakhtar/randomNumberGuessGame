import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import RandomGuessContainer from "../components/game/RandomGuessContainer";
import Btn from "../components/ui/Btn";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogNumItem from "../components/game/GuessLogNumItem";

function generateRandomNumber(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [numberGuessRounds, setNumberGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(numberGuessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is incorrect...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandonNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandonNumber);
    setNumberGuessRounds((prevGuessRounds) => [
      newRandonNumber,
      ...prevGuessRounds,
    ]);
  }

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's guess</Title>
      <RandomGuessContainer>{currentGuess}</RandomGuessContainer>
      <Card>
        <InstructionText style={styles.InstructionTextProp}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btnWrapper}>
            <Btn onPress={nextGuessHandler.bind(this, "greater")}>
              {" "}
              <Ionicons name="md-add" size={24} />
            </Btn>
          </View>
          <View style={styles.btnWrapper}>
            <Btn onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </Btn>
          </View>
        </View>
        <View></View>
      </Card>
      <View style={styles.flatListContainer}>
        <FlatList
          data={numberGuessRounds}
          renderItem={(guess) => (
            <GuessLogNumItem
              guess={guess.item}
              guessCount={numberGuessRounds.length - guess.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 12,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnWrapper: {
    flex: 1,
    margin: 20,
  },
  InstructionTextProp: {
    marginBottom: 20,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 10,
    padding: 12
  }
});
