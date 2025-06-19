import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress, className }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-secondary py-4 rounded-full items-center ${className}`}
      activeOpacity={0.8}
    >
      <Text className="text-white text-base font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
