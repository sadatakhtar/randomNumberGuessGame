import { useState } from "react";
import { StyleSheet, Alert, TextInput, View } from "react-native";
import Colors from "../utils/Colors";
import Btn from "../components/ui/Btn";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ checkUserNumberHandler }) => {
  const [enteredValue, setEnteredVal] = useState("");

  function inputHandler(enteredNum) {
    setEnteredVal(enteredNum);
  }

  function validateConfirmBtnHandler() {
    const inputValConvertedToNum = parseInt(enteredValue);

    if (
      isNaN(inputValConvertedToNum) ||
      inputValConvertedToNum < 1 ||
      inputValConvertedToNum > 99
    ) {
      Alert.alert("Invalid entry", "Number must be between 1 to 99", [
        { text: "Okay", onPress: resetBtnHandler },
      ]);
      return;
    }

    checkUserNumberHandler(inputValConvertedToNum);
  }

  function resetBtnHandler() {
    setEnteredVal("");
  }

  return (
    <View style={styles.titleContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <View style={styles.textContainer}>
          <InstructionText style={styles.instructionTextProp}>Enter a number</InstructionText>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={inputHandler}
            value={enteredValue}
          />
        </View>
        <View style={styles.btnWrapper}>
          <View style={styles.btn}>
            <Btn onPress={resetBtnHandler}>Reset</Btn>
          </View>
          <View style={styles.btn}>
            <Btn onPress={validateConfirmBtnHandler}>Confirm</Btn>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.primaryYellow,
    color: Colors.primaryYellow,
    width: "30%",
    height: "50%",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  textContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    margin: 4,
  },
  btnWrapper: {
    flexDirection: "row",
    margin: 8,
    marginBottom: 20,
  },
  titleContainer: {
    marginHorizontal: 12,
    marginTop: 50,
    flex: 1
  },
  instructionTextProp: {
    marginBottom: 2
  }
});
