import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <View className="flex-1 items-center justify-between my-24">
      <View className="flex items-center gap-4">
        <View className="mb-4 h-24 w-24 rounded-full">
          <Image
            source={require("../assets/icons/home.png")}
            className="h-full w-full rounded-full"
          />
        </View>
        <View className="h-1 w-16 rounded-full bg-gray-300" />
        <View>
          <Text className="text-3xl font-semibold text-center text-gray-700">
            Home Control
          </Text>
          <Text className="text-muted-foreground text-center text-gray-500">
            Modern IoT Home Control App
          </Text>
        </View>
        <View className="flex flex-row gap-2 items-center text-mono rounded bg-white p-2 mt-6">
          <View
            className={`size-2 rounded-full ${
              isConnected ? "bg-green-500" : "bg-gray-300"
            }`}
          />
          <Text className="text-gray-500">{isConnected ? "Connected" : "Not Connected"}</Text>
        </View>
      </View>
      {isConnected ? (
        <View className="flex flex-row items-center justify-center gap-12 rounded-full bg-white p-2">
          <Text className="ml-2 text-gray-500">Go to Control Center</Text>
          <Link href="/control">
            <Image
              source={require("../assets/icons/arrow-right.png")}
              className="size-6 rounded-full w-10 bg-blue-500 p-2"
            />
          </Link>
        </View>
      ) : null}
    </View>
  );
}
