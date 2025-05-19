import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Title from '@/components/Title/Title';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';

interface IStartGameScreenProps {
  updateNumberGuessed: (number: number) => void;
}

const StartGameScreen: React.FunctionComponent<IStartGameScreenProps> = ({
  updateNumberGuessed,
}) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('');

  const handleInputChange = (input: string) => {
    setEnteredNumber(input);
  };

  const reset = () => {
    setEnteredNumber('');
  };

  const apply = () => {
    const parsedNumber = parseInt(enteredNumber);
    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      Alert.alert('Invalid Number!', 'Number must be between 1 and 99.', [
        { text: 'Okay', style: 'default', onPress: reset },
      ]);
      return;
    }
    updateNumberGuessed(parsedNumber);
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <View className="my-auto ">
        <Title label="Guess Number!" />
        <TextInput
          className="mb-3 h-[50px]  rounded-xl border-b border-brand-secondary  text-center text-xl text-brand-secondary"
          maxLength={2}
          value={enteredNumber}
          keyboardType="number-pad"
          onChangeText={handleInputChange}
        />
        <View className="flex-row gap-2 ">
          <PrimaryButton action={reset} label="Reset" />

          <PrimaryButton action={apply} label="Confirm" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;
