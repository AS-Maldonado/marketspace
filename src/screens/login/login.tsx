import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@assets/images/logo.svg";
import { styles } from "./login.style";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Logo width={100} height={100} />
      <Text style={styles.text}>Hello, World!</Text>
    </SafeAreaView>
  );
}
