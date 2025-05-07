import { StyleSheet } from "react-native";
import { theme } from "src/theme";

export const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
  },

  heading: {
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: theme.fonts.karla,
    color: theme.color.gray_1,
  },

  text: {
    fontSize: 14,
    fontFamily: theme.fonts.karla,
    color: theme.color.gray_3,
  },
});
