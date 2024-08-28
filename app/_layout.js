import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#f3f4f6' },
      }}
    />
  );
}

// COMMENTS
// This _layout.js file defines the root layout for the app. 
// It uses the Stack component from expo-router to create a stack-based navigation structure. 
// The screenOptions prop sets global options for all screens in the stack, such as hiding the headr and setting a background color.

// EXPO ROUTER:
// This uses file-based routing -> the about.js file in the app folder automatically becomes a route in the application, located at "/about".
// THIS IS VERY COOL! 🧊