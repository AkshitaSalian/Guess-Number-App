import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

interface IPrimaryButtonProps {
  label?: string;
  action: (val?: any) => void;
  children?: React.ReactNode;
}

const PrimaryButton: React.FunctionComponent<IPrimaryButtonProps> = (props) => {
  const { action, children, label } = props;

  return (
    <Pressable
      onPress={action}
      className="flex  flex-1 items-center justify-center rounded-xl bg-brand-secondary p-4 shadow-lg"
      android_ripple={{ color: '#2b382e' }}>
      {label && <Text className="text-center text-xl text-brand-primary">{label}</Text>}
      {children}
    </Pressable>
  );
};

export default PrimaryButton;
