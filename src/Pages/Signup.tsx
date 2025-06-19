import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../../assets/logo.svg';
import UserIcon from '../../assets/UserIcon.svg';
import EmailIcon from '../../assets/EmailIcon.svg';
import LockIcon from '../../assets/LockIcon.svg';
import FacebookIcon from '../../assets/FacebookIcon.svg';
import InstagramIcon from '../../assets/InstagramIcon.svg';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import CustomInput from '../Components/Input';
import CustomButton from '../Components/Button';

const Signup = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignup = () => {
    console.log('Signup pressed');
    // You can add signup logic here
  };

  const handleSocialLogin = (platform: string) => {
    console.log(`${platform} login pressed`);
  };

  const handleLoginPress = () => {
    console.log('Navigate to Login pressed');
    if (navigation) {
      navigation.navigate('Login');
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Logo Section */}
      <View className="flex-1 items-center mt-12 mb-12">
        <Logo width={160} height={160} />
      </View>

      {/* Register Section */}
      <View
        style={{ backgroundColor: '#E9F9F6' }}
        className="flex-1 rounded-t-3xl py-2 px-2"
      >
        <Text className="text-3xl text-teal-600 text-center pt-6">
          Register
        </Text>

        <View className="rounded-t-3xl pt-8 ">
          {/* Input Fields */}
          <CustomInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            icon={<UserIcon width={20} height={20} />}
          />
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

        {/* Terms and Conditions */}
        <TouchableOpacity
          className="flex-row items-center mx-6 mb-6"
          onPress={() => setAgreeToTerms(!agreeToTerms)}
        >
          <View className="w-full text-gray-600 flex-row items-center justify-center">
            <View
              className={`w-5 h-5 border-2 border-gray-400 rounded mr-3 ${agreeToTerms ? 'bg-teal-600 border-teal-600' : 'bg-none'}`}
            >
              {agreeToTerms && (
                <Text className="text-white text-xs text-center leading-5">
                  ✓
                </Text>
              )}
            </View>
            <Text>
              {' '}
              I agree to the{' '}
              <Text className="font-semibold">terms & conditions</Text>
            </Text>
          </View>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <CustomButton className="mx-4" title="Sign Up" onPress={handleSignup} />

        {/* Or Divider */}
        <View className="flex-row items-center mx-6 my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Media Icons */}
        <View className="flex-row justify-center items-center space-x-4 mb-4">
          <TouchableOpacity
            onPress={() => handleSocialLogin('Facebook')}
            className="p-3"
          >
            <FacebookIcon width={40} height={40} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSocialLogin('Instagram')}
            className="p-3"
          >
            <InstagramIcon width={40} height={40} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSocialLogin('Twitter')}
            className="p-3"
          >
            <TwitterIcon width={40} height={40} />
          </TouchableOpacity>
        </View>

        {/* Signup with social media text */}
        <Text className="text-center text-gray-500 mb-4">
          Signup with your <Text className="font-semibold">social media</Text>{' '}
          account
        </Text>

        {/* Login Link */}
        <Text className="text-center text-lg text-gray-500 mb-4 my-6">
          Already have an account?
        </Text>
        <Text onPress={handleLoginPress} className="text-center text-lg font-bold text-gray-500 mb-4">
          Login
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
