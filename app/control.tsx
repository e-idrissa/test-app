import { Text, View } from "react-native";
import React from "react";
import Footer from "@/components/footer";
import Insight from "@/components/insight";
import Controller from "@/components/controller";

const Control = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex-1 items-center justify-between pt-12 pb-12 px-8 w-full">
        <View className="w-full flex-1 items-center gap-16">
          {/* Environment */}
          <View className="bg-white/40 border border-white p-4 rounded-lg w-full gap-4">
            <Text className="text-lg font-semibold text-gray-500">
              Environmental Sensors
            </Text>
            <View className="flex flex-row items-center justify-between">
              <Insight type={"temperature"} value={"24"} />
              <Insight type={"humidity"} value={"60"} />
              <Insight type={"brightness"} value={"300"} />
            </View>
          </View>
          {/* Sensors */}
          <View className="gap-4">
            <Text className="text-lg font-semibold text-gray-500">
              Controls
            </Text>
            <Controller type={"lamp"} state={false} value={0} />
            <Controller type={"fan"} state={false} value={0} />
          </View>
        </View>
        <Footer />
      </View>
    </View>
  );
};

export default Control;
