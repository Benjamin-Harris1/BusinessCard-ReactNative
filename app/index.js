import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function BusinessCard() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="bg-white p-6 rounded-xl shadow-lg">
        <Image
          source={{ uri: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d.png' }}
          className="w-64 h-32 mb-4"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold mb-2">NVIDIA</Text>
        <Text className="text-gray-600 mb-4">Accelerating the Future of Computing</Text>
        <Text className="mb-2">Santa Clara, California</Text>
        <Text className="mb-4">www.nvidia.com</Text>
        <Link href="/about" asChild>
          <TouchableOpacity className="bg-green-500 py-2 px-4 rounded">
            <Text className="text-white text-center">Learn More</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}