import { LinearGradient } from 'expo-linear-gradient';
import './global.css';
import StartGameScreen from 'screens/StartGameScreen';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

const fullConfig = resolveConfig(require('./tailwind.config'));
const colors = fullConfig.theme?.extend?.colors?.brand;

export default function App() {
  const [numberGuessed, setNumberGuessed] = useState<number>(0);

  const updateNumberGuessed = (number: number) => {
    setNumberGuessed(number);
  };

  const resetNumberGuessed = () => {
    console.log('resetNumberGuessed');
    setNumberGuessed(0);
  };

  const screen =
    numberGuessed > 0 ? (
      <GameScreen resetNumberGuessed={resetNumberGuessed} numberGuessed={numberGuessed} />
    ) : (
      <StartGameScreen updateNumberGuessed={updateNumberGuessed} />
    );

  return (
    <SafeAreaView className="flex-1 ">
      <LinearGradient colors={['#ffffff', '#000000']} style={{ flex: 1 }}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          resizeMode="cover"
          imageStyle={{ opacity: 0.5 }}
          className="flex-1">
          <View className="flex-1 p-4">{screen}</View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}
