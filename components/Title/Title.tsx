import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ITtitleProps {
  label: string;
  showBackButton?: boolean;
  backAction?: () => void;
}

const Title: React.FunctionComponent<ITtitleProps> = (props) => {
  const { label, showBackButton, backAction } = props;

  return (
    <View className="w-full p-3">
      {showBackButton && backAction && (
        <Pressable
          onPress={() => {
            console.log('Back button pressed');
            backAction();
          }}
          className="absolute left-4 top-4 ">
          <Text className="text-brand-secondary">Back</Text>
        </Pressable>
      )}
      <Text className="text-center text-[30px] text-brand-secondary">{label}</Text>
    </View>
  );
};

export default Title;
