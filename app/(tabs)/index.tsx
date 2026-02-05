import { router } from "expo-router";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import BottomNavbar from "../../components/BottomNavbar";

const userName = "Paul Kurt";

const modules = [
  { title: "Docu", route: "/(tabs)/docu" },
  { title: "Daily Task", route: "/(tabs)/dailytask" },
  { title: "Login", route: "/(auth)/login" },
];

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 80) / 3;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.header}>Hello, Sir {userName} 👋</Text>
      </View>
      <View style={styles.grid}>
        {modules.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.card,
              { width: CARD_WIDTH },
              pressed && styles.cardPressed,
            ]}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5eef4",
    padding: 50,
    justifyContent: "space-between",
  },
  topSection: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    color: "#1e3a8a",
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 50,
  },
  card: {
    backgroundColor: "#3b82f6",
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 0,
  },
  cardPressed: {
    backgroundColor: "#1e40af",
    transform: [{ scale: 0.95 }],
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },
});
