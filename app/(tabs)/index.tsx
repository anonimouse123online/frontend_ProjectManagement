import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const TASKS = [
  {
    id: "1",
    title: "Foundation Excavation - Section A",
    description:
      "Complete excavation for basement levels 1-3 in Section A, ensure proper soil stability.",
    due: "2026-02-20",
    phase: "Phase 1 - Foundation",
    docs: 2,
    priority: "HIGH",
    status: "in-progress",
    priorityColor: "#FF6B00",
  },
  {
    id: "2",
    title: "Steel Frame Installation - Tower Section",
    description: "Install structural steel columns and beams for floors 6-10",
    due: "2026-03-15",
    phase: "Phase 2 - Structure",
    docs: 3,
    priority: "CRITICAL",
    status: "pending",
    priorityColor: "#FF3B30",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    { id: 1, text: "Site inspection scheduled for tomorrow." },
    { id: 2, text: "Foundation Excavation approved." },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => setShowNotifications(false)}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerTitle}>My Tasks</Text>
            <Text style={styles.headerSubtitle}>Site Engineer Field App</Text>
          </View>

          <View style={styles.notifWrapper}>
            <Pressable
              onPress={() => setShowNotifications(!showNotifications)}
              style={styles.notificationContainer}
            >
              <Ionicons name="notifications-outline" size={28} color="white" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notifications.length}</Text>
              </View>
            </Pressable>

            {showNotifications && (
              <Pressable
                style={styles.notifCard}
                onPress={(e) => e.stopPropagation()}
              >
                <View style={styles.notifHeader}>
                  <Text style={styles.notifTitle}>Notifications</Text>
                </View>
                {notifications.map((n) => (
                  <View key={n.id} style={styles.notifItem}>
                    <View style={styles.notifDot} />
                    <Text style={styles.notifText}>{n.text}</Text>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={() => setShowNotifications(false)}
                  style={styles.notifCloseBtn}
                >
                  <Text style={styles.notifCloseText}>Close</Text>
                </TouchableOpacity>
              </Pressable>
            )}
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          onScrollBeginDrag={() => setShowNotifications(false)}
        >
          <View style={styles.statsRow}>
            <View
              style={[
                styles.statBox,
                { borderColor: "#BBD6FB", backgroundColor: "#EBF3FF" },
              ]}
            >
              <Text style={[styles.statNumber, { color: "#0055D4" }]}>3</Text>
              <Text style={[styles.statLabel, { color: "#0055D4" }]}>
                Total
              </Text>
            </View>
            <View
              style={[
                styles.statBox,
                { borderColor: "#FFDAB9", backgroundColor: "#FFF4E5" },
              ]}
            >
              <Text style={[styles.statNumber, { color: "#FF6B00" }]}>2</Text>
              <Text style={[styles.statLabel, { color: "#FF6B00" }]}>
                Active
              </Text>
            </View>
            <View
              style={[
                styles.statBox,
                { borderColor: "#C6F6D5", backgroundColor: "#F0FFF4" },
              ]}
            >
              <Text style={[styles.statNumber, { color: "#2F855A" }]}>1</Text>
              <Text style={[styles.statLabel, { color: "#2F855A" }]}>Done</Text>
            </View>
          </View>

          {TASKS.map((task) => (
            <Pressable
              key={task.id}
              style={({ pressed }) => [
                styles.taskCard,
                pressed && { opacity: 0.7, transform: [{ scale: 0.98 }] },
              ]}
              onPress={() => {
                setShowNotifications(false);
                router.push("/(tabs)/task-detail");
              }}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View
                  style={[
                    styles.priorityTag,
                    { backgroundColor: task.priorityColor },
                  ]}
                >
                  <Text style={styles.priorityText}>{task.priority}</Text>
                </View>
              </View>

              <Text style={styles.description} numberOfLines={2}>
                {task.description}
              </Text>

              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={16} color="#666" />
                <Text style={styles.infoText}>
                  Due: <Text style={styles.boldText}>{task.due}</Text>
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="flag-outline" size={16} color="#666" />
                <Text style={styles.infoText}>
                  Phase: <Text style={styles.boldText}>{task.phase}</Text>
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="document-text-outline" size={16} color="#666" />
                <Text style={styles.infoText}>
                  {task.docs} attached documents
                </Text>
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.statusTag}>
                  <Text style={styles.statusText}>{task.status}</Text>
                </View>
                <View style={styles.detailsBtn}>
                  <Text style={styles.detailsText}>View Details</Text>
                  <Ionicons name="chevron-forward" size={18} color="#000" />
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  headerContainer: {
    backgroundColor: "#050A14",
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "bold" },
  headerSubtitle: { color: "#CCC", fontSize: 14, marginTop: 4 },

  notifWrapper: { position: "relative" },
  notificationContainer: { position: "relative", padding: 4 },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: { color: "white", fontSize: 9, fontWeight: "bold" },
  notifCard: {
    position: "absolute",
    top: 40,
    right: 0,
    width: 240,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  notifHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    paddingBottom: 8,
    marginBottom: 10,
  },
  notifTitle: { fontSize: 14, fontWeight: "bold", color: "#333" },
  notifItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  notifDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#007AFF",
    marginTop: 5,
    marginRight: 8,
  },
  notifText: { fontSize: 12, color: "#555", flex: 1, lineHeight: 16 },
  notifCloseBtn: { marginTop: 5, alignSelf: "center" },
  notifCloseText: { color: "#007AFF", fontSize: 12, fontWeight: "600" },

  scrollContent: { padding: 15 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    width: (width - 50) / 3,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1.5,
    alignItems: "center",
  },
  statNumber: { fontSize: 22, fontWeight: "bold" },
  statLabel: { fontSize: 12, fontWeight: "500" },
  taskCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#EEE",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginRight: 10,
    color: "#000",
  },
  priorityTag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  priorityText: { color: "white", fontSize: 11, fontWeight: "800" },
  description: {
    color: "#777",
    fontSize: 14,
    marginVertical: 12,
    lineHeight: 20,
  },
  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  infoText: { marginLeft: 10, color: "#555", fontSize: 14 },
  boldText: { fontWeight: "bold", color: "#333" },
  cardFooter: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusTag: {
    backgroundColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "capitalize",
  },
  detailsBtn: { flexDirection: "row", alignItems: "center" },
  detailsText: { fontSize: 14, fontWeight: "600", marginRight: 4 },
});
