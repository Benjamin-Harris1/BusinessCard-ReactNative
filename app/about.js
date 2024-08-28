import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const gpuImages = [
    'https://assets.nvidia.partners/images/png/GeForce-ADA-RTX4060Ti-Back.png',
    'https://assets.nvidia.partners/images/png/GeForce-RTX4090-Back.png',
    'https://assets.nvidia.partners/images/png/RTX-4080-SUPER-Back.png',
    'https://assets.nvidia.partners/images/png/GeForce-ADA-RTX4070-Back.png'
  ];

  export default function About() {
    return (
        <View className="flex-1 items-center justify-center bg-gray-100 p-4">
          <View className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <Text className="text-2xl font-bold mb-4">About NVIDIA</Text>
            <Text className="text-gray-700 mb-4">
              NVIDIA is a global leader in artificial intelligence hardware and software. 
              From gaming to data centers, NVIDIA's innovations drive the future of computing.
            </Text>
            <View className="flex-row flex-wrap justify-between mb-4">
              {gpuImages.map((uri, index) => (
                <Image
                  key={index}
                  source={{ uri }}
                  className="w-[48%] h-24 mb-2"
                  resizeMode="contain"
                />
              ))}
            </View>
            <Link href="/" asChild>
              <TouchableOpacity className="bg-green-500 py-2 px-4 rounded">
                <Text className="text-white text-center">Back to Card</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
    );
}