import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name="index" options={{contentStyle: {backgroundColor: '#BC96E6'}}}/>
      <Stack.Screen name="map" options={{contentStyle: {backgroundColor: '#D8B4E2'}}}/>
      <Stack.Screen name="racks" options={{contentStyle: {backgroundColor: '#D8B4E2'}}}/>
      <Stack.Screen name="search" options={{contentStyle: {backgroundColor: '#D8B4E2'}}}/>
      <Stack.Screen name="help" options={{contentStyle: {backgroundColor: '#D8B4E2'}}}/>
    </Stack>
  );
}
