import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { StatusBar } from "react-native";
import { theme } from "src/theme";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.color.gray_6}
        translucent
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
