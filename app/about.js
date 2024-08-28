import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function About() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">About NVIDIA</Text>
      <Text className="text-gray-700 mb-4 text-center">
        NVIDIA is a global leader in artificial intelligence hardware and software. 
        From gaming to data centers, NVIDIA's innovations drive the future of computing.
      </Text>
      <Link href="/" asChild>
        <TouchableOpacity className="bg-green-500 py-2 px-4 rounded">
          <Text className="text-white text-center">Back to Card</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}