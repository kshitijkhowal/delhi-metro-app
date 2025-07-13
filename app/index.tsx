import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import graphGeneration from "./utils/graphGeneration/graphGeneration";

export default function Index() {
  const router = useRouter();

  const { stopMap, metroGraph, tripMap, weightedGraph } = graphGeneration();

  console.log(weightedGraph);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>This is Screen 1</Text>
      {/* <Button title="Go to Screen 2" onPress={() => router.push("details")} /> */}
      {/* <Button title="Delhi Metro Transit" onPress={() => router.push("transit")} /> */}
    </View>
  );
}
