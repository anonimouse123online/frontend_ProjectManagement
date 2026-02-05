import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface DetailItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

interface DocItemProps {
  name: string;
  meta: string;
  onPress: () => void;
}

export default function TaskDetailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/")}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.backText}>Back to Tasks</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.cardRow}>
            <Text style={styles.title}>Foundation Excavation - Section A</Text>
            <View style={styles.priorityBadge}>
              <Text style={styles.priorityText}>HIGH</Text>
            </View>
          </View>
          <Text style={styles.desc}>
            Complete excavation for basement levels 1-3 in Section A, ensure
            proper shoring and dewatering
          </Text>

          <View style={styles.divider} />

          <DetailItem
            icon="calendar-outline"
            label="Due Date"
            value="2026-02-20"
          />
          <DetailItem
            icon="flag-outline"
            label="Phase"
            value="Phase 1 - Foundation"
          />
          <DetailItem
            icon="time-outline"
            label="Estimated Time"
            value="120 hours"
          />

          <View style={styles.detailItem}>
            <Ionicons name="checkmark-circle-outline" size={22} color="#666" />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Status</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>in-progress</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.instructionCard}>
          <FontAwesome name="warning" size={24} color="#E67E22" />
          <View style={styles.instructionContent}>
            <Text style={styles.instructionTitle}>Special Instructions</Text>
            <Text style={styles.instructionText}>
              Follow safety protocol SP-001. Maintain 3:1 slope ratio. Check
              groundwater levels hourly.
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Ionicons name="document-text" size={20} color="black" />
          <Text style={styles.sectionTitle}>Technical Documents</Text>
        </View>

        <DocItem
          name="Structural Plans - Foundation Level"
          meta="structural • 12.5 MB"
          onPress={() => router.push("/(tabs)/document-viewer")}
        />
        <DocItem
          name="MEP Layout - Floors 1-5"
          meta="mep • 8.3 MB"
          onPress={() => router.push("/(tabs)/document-viewer" as any)}
        />
        <DocItem
          name="Safety Procedures Manual"
          meta="safety • 2.1 MB"
          onPress={() => router.push("/(tabs)/document-viewer" as any)}
        />
        <DocItem
          name="Architectural Elevations"
          meta="architectural • 15.7 MB"
          onPress={() => router.push("/(tabs)/document-viewer" as any)}
        />

        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitleAlt}>Field Actions</Text>

          <TouchableOpacity
            style={styles.primaryAction}
            onPress={() => router.push("/progress-evidence")}
          >
            <Ionicons name="camera" size={20} color="white" />
            <Text style={styles.primaryActionText}>
              Capture Progress Photo/Video
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryAction}
            onPress={() => router.push("/(tabs)/daily-log")}
          >
            <Ionicons name="clipboard-outline" size={20} color="black" />
            <Text style={styles.secondaryActionText}>Add Daily Log Entry</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryAction}
            onPress={() => router.push("/report-issue" as any)}
          >
            <Ionicons name="alert-circle-outline" size={20} color="black" />
            <Text style={styles.secondaryActionText}>Report Issue/Delay</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.completeBtn}
          onPress={() => {
            alert("Task marked as complete!");
            router.replace("/");
          }}
        >
          <Ionicons name="checkmark-circle" size={24} color="white" />
          <Text style={styles.completeText}>Mark Task Complete</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value }) => (
  <View style={styles.detailItem}>
    <Ionicons name={icon} size={22} color="#666" />
    <View style={styles.detailTextContainer}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  </View>
);

const DocItem: React.FC<DocItemProps> = ({ name, meta, onPress }) => (
  <TouchableOpacity style={styles.docItem} onPress={onPress}>
    <Ionicons name="document-outline" size={24} color="#999" />
    <View style={{ marginLeft: 12, flex: 1 }}>
      <Text style={styles.docName}>{name}</Text>
      <Text style={styles.docMeta}>{meta}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#CCC" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  header: {
    backgroundColor: "#050A14",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    zIndex: 10,
  },
  backBtn: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  backText: { color: "white", marginLeft: 8, fontSize: 14, fontWeight: "500" },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "bold" },
  content: { padding: 16, paddingBottom: 100 },
  mainCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: { fontSize: 22, fontWeight: "bold", flex: 1, marginRight: 10 },
  priorityBadge: {
    backgroundColor: "#FF6B00",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  priorityText: { color: "white", fontWeight: "800", fontSize: 12 },
  desc: { color: "#7F8C8D", fontSize: 16, marginVertical: 15, lineHeight: 22 },
  divider: { height: 1, backgroundColor: "#EEE", marginVertical: 10 },
  detailItem: { flexDirection: "row", alignItems: "center", marginTop: 15 },
  detailTextContainer: { marginLeft: 15 },
  detailLabel: { fontSize: 12, color: "#95A5A6" },
  detailValue: { fontSize: 16, fontWeight: "600", color: "#2C3E50" },
  statusBadge: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  statusText: { color: "white", fontWeight: "bold", fontSize: 14 },
  instructionCard: {
    backgroundColor: "#FFF5EB",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#FFE0C2",
  },
  instructionContent: { marginLeft: 12, flex: 1 },
  instructionTitle: {
    fontWeight: "bold",
    color: "#873600",
    fontSize: 16,
    marginBottom: 4,
  },
  instructionText: { color: "#A04000", lineHeight: 20 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  docItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  docName: { fontWeight: "600", fontSize: 15 },
  docMeta: { fontSize: 12, color: "#999", marginTop: 2 },
  actionsContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  sectionTitleAlt: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  primaryAction: {
    backgroundColor: "#050A14",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryActionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  secondaryAction: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  secondaryActionText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  completeBtn: {
    backgroundColor: "#27AE60",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  completeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  switchWebBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#050A14",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  switchWebText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 14,
  },
});
