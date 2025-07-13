import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => router.navigate('details111')} />
    </View>
  );
}
