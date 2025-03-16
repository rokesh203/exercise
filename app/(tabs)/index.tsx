import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent font-bold">Welcome rokesh dont waste your time</Text>
      <Link href="/onboarding">
        <Text style={{ color: "blue" }}>onboarding</Text>
      </Link>
      <Link href="./movie/[id].tsx">
        <Text style={{ color: "red" }}>Movie details</Text>
      </Link>
     

  
     
 
    </View>
  );
}
