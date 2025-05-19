import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import Title from '@/components/Title/Title';
import * as React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

interface IGameScreenProps {
  resetNumberGuessed: () => void;
  numberGuessed: number;
}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FunctionComponent<IGameScreenProps> = (props) => {
  const [currentGuess, setCurrentGuess] = React.useState<number>(generateRandomNumber(1, 100));

  const { resetNumberGuessed, numberGuessed } = props;

  const nextGuessHandler = (direction: 'lower' | 'greater') => {
    if (
      (direction === 'lower' && currentGuess < numberGuessed) ||
      (direction === 'greater' && currentGuess > numberGuessed)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    // Generate a new random number
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    }
    if (direction === 'greater') {
      minBoundary = currentGuess + 1;
    }
    const nextNumber = generateRandomNumber(minBoundary, maxBoundary);
    setCurrentGuess(nextNumber);
  };

  return (
    <View className="flex-1">
      <Title label="Have fun!" showBackButton backAction={resetNumberGuessed} />
      <View className="flex  h-full  items-center justify-center gap-8">
        <Text className="text-xl">Opponent's guess is {currentGuess}</Text>
        {currentGuess === numberGuessed ? (
          <View>
            <Text>Hurray!! your number is {currentGuess}</Text>
            <View className="max-h-16">
              <PrimaryButton action={() => resetNumberGuessed()} label="Start new Game!!" />
            </View>
          </View>
        ) : (
          <>
            <Text>Higher or lower?</Text>
            <View className="flex-row gap-2">
              <PrimaryButton action={() => nextGuessHandler('greater')}>
                <Ionicons name="add-outline" color={'white'} size={24} />
              </PrimaryButton>
              <PrimaryButton action={() => nextGuessHandler('lower')}>
                <Ionicons name="remove" color={'white'} size={24} />
              </PrimaryButton>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default GameScreen;
