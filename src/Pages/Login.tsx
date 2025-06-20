import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Logo from '../../assets/logo.svg';
import UserIcon from '../../assets/UserIcon.svg';
import EmailIcon from '../../assets/EmailIcon.svg';
import LockIcon from '../../assets/LockIcon.svg';
import CustomInput from '../Components/Input';

import CustomButton from '../Components/Button';

const Login = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed');
    if (navigation) {
      navigation.navigate('ARScene');
    }
  };

  const handleSignupPress = () => {
    console.log('Signup pressed');
    if (navigation) {
      navigation.navigate('Signup');
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Logo Section */}
      <View className="flex-1 items-center mt-8 mb-8 py-24">
        <Logo width={160} height={160} />
      </View>

      {/* Login Section */}
      <View
        style={{ backgroundColor: '#E9F9F6' }}
        className="flex-1 rounded-t-3xl py-4  px-2"
      >
        <Text className="text-3xl text-teal-600 text-center pt-6">
          Login
        </Text>

        <View className="rounded-t-3xl pt-8 ">
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<EmailIcon width={20} height={20} />}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon={<LockIcon width={20} height={20} />}
          />
        </View>

        {/* Login Button */}
        <CustomButton className="mx-4 my-4" title="Login" onPress={handleLogin} />

        <Text className="text-center text-lg text-gray-500 mb-4 my-6">
         Don't have an account? 
        </Text>
        <Text onPress={handleSignupPress} className="text-center text-lg font-bold text-gray-500 mb-4">Sign up</Text>
      </View>
    </ScrollView>
  );
};

export default Login;
