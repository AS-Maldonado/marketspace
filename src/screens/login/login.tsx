import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@assets/images/logo.svg";
import { styles } from "./login.style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Logo width={100} height={100} />
            <Text style={styles.heading}>marketspace</Text>
            <Text style={styles.text}>Seu espaço de compra e venda</Text>
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.text}>Acesse sua conta</Text>

            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              keyboardType="default"
              placeholder="Senha"
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.text}>Ainda não tem acesso?</Text>

            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
