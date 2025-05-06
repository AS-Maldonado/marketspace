import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/login";
import RegisterSceen from "../screens/register";

type RootStackParams = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterSceen} />
    </Stack.Navigator>
  );
}
