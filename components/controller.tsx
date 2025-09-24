import { View, Text, TouchableOpacity, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

type Props = {
  type: "lamp" | "fan";
  state: boolean;
  value: number;
};

const Controller = ({ type, state, value }: Props) => {
  const [isActive, setIsActive] = useState(state);
  const [sliderValue, setSliderValue] = useState(value);

  const onToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <View className="w-full bg-white/30 border border-white rounded-lg p-4 gap-4">
      <View className="flex flex-row h-16 w-full gap-6 items-center justify-between">
        <TouchableOpacity onPress={onToggle}>
          <View
            className={`rounded-lg size-16 flex items-center justify-center ${
              isActive ? "bg-yellow-500" : "bg-gray-500/50"
            }`}
          >
            <Image
              source={
                type === "lamp"
                  ? require("../assets/icons/bulb.png")
                  : require("../assets/icons/fan.png")
              }
              className="size-8"
            />
          </View>
        </TouchableOpacity>
        <View className="flex-1 ">
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={sliderValue}
            onValueChange={setSliderValue}
            minimumTrackTintColor="#007aff"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#007aff"
          />
          <View className="flex flex-row items-center justify-between w-full">
            <Text className="text-sm text-gray-500">0%</Text>
            <Text className="text-sm text-gray-500">{sliderValue}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Controller;
