import { useState } from "react";
import {
  StyleSheet,
  Alert,
  TextInput,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Colors from "../utils/Colors";
import Btn from "../components/ui/Btn";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ checkUserNumberHandler }) => {
  const [enteredValue, setEnteredVal] = useState("");

  const { width, height } = useWindowDimensions();

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

  const marginTopDimensions = height < 350 ? 20 : 50;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[styles.titleContainer, { marginTop: marginTopDimensions }]}
        >
          <Title>Guess My Number</Title>
          <Card>
            <View style={styles.textContainer}>
              <InstructionText style={styles.instructionTextProp}>
                Enter a number
              </InstructionText>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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
    width: deviceWidth < 350 ? 200 : 280,
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
    // marginTop: deviceHeight < 380 ? 20 : 50,
    flex: 1,
    alignItems: "center",
  },
  instructionTextProp: {
    marginBottom: 2,
  },
});
