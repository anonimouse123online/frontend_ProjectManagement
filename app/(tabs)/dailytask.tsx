import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Task() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Task</Text>

      <Pressable
        style={({ pressed }) => [
          styles.buttonTask,
          pressed && styles.taskButtonPressed,
        ]}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.buttonText}>Create Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 700,
    marginLeft: -280,
  },
  buttonTask: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 720,
  },
  taskButtonPressed: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
