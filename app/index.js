import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
// FontAwesome is imported to use vector icons in the app.
import { FontAwesome } from "@expo/vector-icons";

export default function BusinessCard() {
  return (
    <View className="flex-1 items-center justify-evenly bg-gray-100 p-4">
      <View className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <Image
          source={{ uri: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d.png" }}
          className="w-full h-40 mb-4"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold mb-2">NVIDIA</Text>
        <Text className="text-gray-600 mb-4">Accelerating the Future of Computing</Text>
        <View className="flex-row items-center mb-2">
          <FontAwesome name="map-marker" size={16} color="gray" />
          <Text className="text-xs ml-2">2788 San Tomas Expy, Santa Clara, CA 95051, USA</Text>
        </View>
        <View className="flex-row items-center mb-2">
          <FontAwesome name="phone" size={16} color="gray" />
          <Text className="text-xs ml-2">+1 408-486-2000</Text>
        </View>
        <View className="flex-row items-center mb-4">
          <FontAwesome name="globe" size={16} color="gray" />
          <Text className="text-xs ml-2">www.nvidia.com</Text>
        </View>
        <Link href="/about" asChild>
          <TouchableOpacity className="bg-green-500 py-2 px-4 rounded">
            <Text className="text-white text-center">Learn More</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
