import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  icon?: React.ReactNode;
  containerStyle?: string;
  inputStyle?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  containerStyle = '',
  inputStyle = '',
  ...textInputProps
}) => {
  return (
    <View className={`flex-row items-center border-2 border-gray-300 rounded-full px-8 py-2 mx-6 mb-4 ${containerStyle}`}>
      {icon && (
        <View className="mr-3">
          {icon}
        </View>
      )}
      <TextInput
        className={`flex-1 text-gray-700 text-base ${inputStyle}`}
        placeholderTextColor="#9CA3AF"
        {...textInputProps}
      />
    </View>
  );
};

export default CustomInput;