import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProgressEvidenceScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/(tabs)/task-detail")}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.backText}>Back to Task</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Progress Evidence</Text>
        <Text style={styles.headerSubtitle}>
          Capture photos/videos of work completed
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Task Context Card */}
        <View style={styles.contextCard}>
          <Text style={styles.contextLabel}>Documenting progress for:</Text>
          <Text style={styles.contextTitle}>
            Foundation Excavation - Section A
          </Text>
        </View>

        {/* Capture Media Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Capture Media</Text>

          <TouchableOpacity style={styles.primaryMediaBtn}>
            <Ionicons name="camera" size={22} color="white" />
            <Text style={styles.primaryMediaBtnText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryMediaBtn}>
            <Ionicons name="videocam-outline" size={22} color="black" />
            <Text style={styles.secondaryMediaBtnText}>Record Video</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryMediaBtn}>
            <Ionicons name="images-outline" size={22} color="black" />
            <Text style={styles.secondaryMediaBtnText}>
              Upload from Gallery
            </Text>
          </TouchableOpacity>
        </View>

        {/* Progress Notes Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Progress Notes</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Describe the work completed, any observations, or additional context..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          <Text style={styles.notesHint}>
            Include details about quality, safety compliance, and any deviations
            from plan
          </Text>
        </View>

        {/* Auto-Captured Data Section */}
        <View style={[styles.sectionCard, styles.autoDataCard]}>
          <Text style={[styles.sectionTitle, { color: "#1A365D" }]}>
            Auto-Captured Data
          </Text>

          <View style={styles.dataRow}>
            <Ionicons name="location" size={18} color="#E53E3E" />
            <Text style={styles.dataText}>GPS Location: Will be recorded</Text>
          </View>

          <View style={styles.dataRow}>
            <Ionicons name="time" size={18} color="#718096" />
            <Text style={styles.dataText}>Timestamp: 2/5/2026, 8:48:20 PM</Text>
          </View>

          <View style={styles.dataRow}>
            <Ionicons name="person" size={18} color="#553C9A" />
            <Text style={styles.dataText}>Engineer: Your Name</Text>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitBtn}>
          <Ionicons name="cloud-upload-outline" size={22} color="white" />
          <Text style={styles.submitBtnText}>Submit Progress Evidence</Text>
        </TouchableOpacity>
        <Text style={styles.footerHint}>
          Capture at least one photo/video or add notes to submit
        </Text>
      </ScrollView>

      {/* Floating Web Button */}
      <TouchableOpacity style={styles.switchWebBtn}>
        <Ionicons name="desktop-outline" size={18} color="white" />
        <Text style={styles.switchWebText}>Switch to Web</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  header: {
    backgroundColor: "#050A14",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backBtn: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  backText: { color: "white", marginLeft: 8, fontSize: 14 },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "bold" },
  headerSubtitle: { color: "#BDC3C7", fontSize: 14, marginTop: 4 },
  content: { padding: 16, paddingBottom: 100 },
  contextCard: {
    backgroundColor: "#F1F2F6",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E1E2E6",
  },
  contextLabel: { fontSize: 12, color: "#7F8C8D", marginBottom: 4 },
  contextTitle: { fontSize: 16, fontWeight: "bold", color: "#2C3E50" },
  sectionCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  primaryMediaBtn: {
    backgroundColor: "#050A14",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryMediaBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  secondaryMediaBtn: {
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
  secondaryMediaBtnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  notesInput: {
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    fontSize: 15,
  },
  notesHint: { fontSize: 12, color: "#94A3B8", marginTop: 10, lineHeight: 18 },
  autoDataCard: { backgroundColor: "#EBF8FF", borderColor: "#BEE3F8" },
  dataRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  dataText: { marginLeft: 10, color: "#2D3748", fontSize: 14 },
  submitBtn: {
    backgroundColor: "#82D6A4",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  submitBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  footerHint: {
    textAlign: "center",
    color: "#718096",
    fontSize: 12,
    marginTop: 15,
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
  },
  switchWebText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 14,
  },
});
