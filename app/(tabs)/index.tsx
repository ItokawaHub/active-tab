import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="/(tabs2)/page3"
      >
        <Text>ここを押すとPage3へ遷移してタブが変わる</Text>
      </Link>
    </View>
  );
}
