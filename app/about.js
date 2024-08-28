import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

// Here I made an array of images, so that I can map over them in the return statement below.
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
            {/* I'm mapping over the gpuImages array and rendering an Image component for each image.*/}
              {gpuImages.map((uri, index) => (
                <Image
                  key={index}
                  source={{ uri }}
                  className="w-[48%] h-24 mb-2"
                  resizeMode="contain"
                />
              ))}
            </View>
            {
            /* The link component (from expo-router) is used to navigate back to the home page (/)
            It uses the asChild prop to pass the child component as a child of the Link component.
            This allows the Link component to render as a touchable element on the platform, and inherits the styling from the
            TouchableOpacity component.
            */}
            <Link href="/" asChild>
              <TouchableOpacity className="bg-green-500 py-2 px-4 rounded">
                <Text className="text-white text-center">Back to Card</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
    );
}
