import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../utils/generateRandomNumberBetween";

type GameScreenProps = {
  userNumber: number;
};

const GameScreen: React.FC<GameScreenProps> = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});