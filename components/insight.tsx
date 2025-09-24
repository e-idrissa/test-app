import { Image, Text, View } from "react-native";
import React from "react";

type Props = {
  type: "temperature" | "humidity" | "brightness";
  value: string;
};

const Insight = ({ type, value }: Props) => {
  return (
    <View className="bg-white p-2 rounded-lg w-24 h-24 gap-2">
      <Image
        source={
          type === "temperature"
            ? require("../assets/icons/thermometer.png")
            : type === "humidity"
            ? require("../assets/icons/drop.png")
            : require("../assets/icons/sun.png")
        }
        className="size-5"
      />
      <Text className="text-sm text-gray-500 font-medium capitalize">
        {type}
      </Text>
      <View className="flex flex-row items-start gap-1">
        <Text className="text-2xl font-semibold text-gray-500">{value}</Text>
        <Text className="font-medium text-gray-500">
          {type === "temperature" ? "°C" : type === "humidity" ? "%" : "lux"}
        </Text>
      </View>
    </View>
  );
};

export default Insight;
