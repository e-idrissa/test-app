import { Stack } from "expo-router";
import "./globals.css"

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="control" options={{ headerShown: true, title: "Control Center" }} />
  </Stack>;
}
