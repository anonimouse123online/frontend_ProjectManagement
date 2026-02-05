import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function IntroScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Automatically navigate to login after 2 seconds
      router.replace("/login"); // replace so user can't go back to intro
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        Real-Time Field Reporting & Issue Tracker for Civil Site Engineers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    marginTop: 10,
    color: "#94a3b8",
    textAlign: "center",
  },
});
