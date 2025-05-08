import { Dimensions, StyleSheet } from "react-native";
import { theme } from "src/theme";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: theme.color.gray_6,
  },

  loginContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.color.gray_6,
  },

  heading: {
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: theme.fonts.karla,
    color: theme.color.gray_1,
  },

  text: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: "center",
    fontFamily: theme.fonts.karla,
    color: theme.color.gray_3,
  },

  input: {
    width: 280,
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.color.gray_7,
    color: theme.color.gray_4,
    borderRadius: 8,
  },

  loginButton: {
    width: 280,
    borderRadius: 8,
    paddingVertical: 12,
    fontSize: 14,
    marginTop: 18,
    backgroundColor: theme.color.blueLight,
  },

  loginButtonText: {
    color: theme.color.gray_7,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: theme.fonts.karla,
  },

  registerContainer: {
    paddingVertical: 40,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.gray_7,
  },

  registerButton: {
    width: 280,
    borderRadius: 8,
    paddingVertical: 12,
    fontSize: 14,
    marginTop: 8,
    backgroundColor: theme.color.gray_5,
  },

  registerButtonText: {
    color: theme.color.gray_2,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: theme.fonts.karla,
  },
});
