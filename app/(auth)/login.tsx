import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundCircle} />
      <View style={styles.backgroundCircle1} />
      <View style={styles.backgroundCircle2} />

      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/(auth)/signup")}>
        <Text style={styles.link}> Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
  },

  backgroundCircle: {
    position: "absolute",

    width: 300,
    height: 300,
    borderRadius: 150,

    top: -80,
    right: -100,

    backgroundColor: "#eb6e25",
    opacity: 0.5,
  },
  backgroundCircle1: {
    position: "absolute",

    width: 300,
    height: 300,
    borderRadius: 150,

    bottom: -80,
    right: 120,

    backgroundColor: "#eb2532",
    opacity: 5,
  },
  backgroundCircle2: {
    position: "absolute",

    width: 300,
    height: 300,
    borderRadius: 150,

    top: 50,
    left: -110,

    backgroundColor: "#eb6e25",
    opacity: 0.5,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#2563eb",
  },
});
