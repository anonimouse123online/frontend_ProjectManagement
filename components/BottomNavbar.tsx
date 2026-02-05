import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BottomNavbar() {
  return (
    <View style={styles.bottomNav}>
      <Pressable
        style={({ pressed }) => [
          styles.navButton,
          pressed && styles.navButtonPressed,
        ]}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.navLabel}>Home</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.navButton,
          pressed && styles.navButtonPressed,
        ]}
        onPress={() => router.push("/(tabs)/profile")}
      >
        <Text style={styles.navLabel}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute", // lock to bottom
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#d1d5db",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  navButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonPressed: {
    opacity: 0.6,
  },
  navIcon: {
    fontSize: 24,
  },
  navLabel: {
    fontSize: 12,
    color: "#1e3a8a",
    marginTop: 2,
  },
});
