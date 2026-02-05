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

export default function DailyLogScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/(tabs)/task-detail")}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.backText}>Back to Task</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Daily Log Entry</Text>
        <Text style={styles.headerSubtitle}>
          Record site activity and conditions
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Context Header Card */}
        <View style={styles.contextCard}>
          <Text style={styles.contextLabel}>Daily log for:</Text>
          <Text style={styles.contextTitle}>
            Foundation Excavation - Section A
          </Text>
          <Text style={styles.contextDate}>Date: 2026-02-05</Text>
        </View>

        {/* Manpower Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <Ionicons name="people-outline" size={22} color="black" />
            <Text style={styles.sectionTitle}>Manpower</Text>
          </View>

          <Text style={styles.inputLabel}>Workers on Site</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Number of workers"
            keyboardType="numeric"
          />

          <Text style={styles.inputLabel}>Supervisors</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Number of supervisors"
            keyboardType="numeric"
          />

          <Text style={styles.inputLabel}>Sub-contractors</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Number of contractors"
            keyboardType="numeric"
          />

          <Text style={styles.inputLabel}>Total Work Hours</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g., 8"
            keyboardType="numeric"
          />
        </View>

        {/* Weather Conditions Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <Ionicons name="cloud-outline" size={22} color="black" />
            <Text style={styles.sectionTitle}>Weather Conditions</Text>
          </View>

          <Text style={styles.inputLabel}>Weather</Text>
          <View style={styles.dropdown}>
            <Text>Clear/Sunny</Text>
            <Ionicons name="chevron-down" size={18} color="#999" />
          </View>

          <Text style={styles.inputLabel}>Temperature (°C)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g., 25"
            keyboardType="numeric"
          />
        </View>

        {/* Work Progress Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Work Progress</Text>
          <Text style={styles.inputLabel}>Work Completed Today</Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Describe tasks and activities completed..."
            multiline
          />
        </View>

        {/* Materials & Equipment Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <Ionicons name="bus-outline" size={22} color="black" />
            <Text style={styles.sectionTitle}>Materials & Equipment</Text>
          </View>

          <Text style={styles.inputLabel}>Materials Delivered</Text>
          <TextInput
            style={[styles.textInput, styles.textAreaSmall]}
            placeholder="List materials and quantities received..."
            multiline
          />

          <Text style={styles.inputLabel}>Equipment Used</Text>
          <TextInput
            style={[styles.textInput, styles.textAreaSmall]}
            placeholder="List equipment and machinery used..."
            multiline
          />
        </View>

        {/* Safety Report Section */}
        <View style={[styles.sectionCard, styles.safetyCard]}>
          <Text style={styles.safetyTitle}>Safety Report</Text>
          <Text style={styles.inputLabel}>Safety Incidents</Text>
          <View style={styles.dropdown}>
            <Text>No Incidents</Text>
            <Ionicons name="chevron-down" size={18} color="#999" />
          </View>
        </View>

        {/* Additional Notes */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          <TextInput
            style={[styles.textInput, styles.textAreaSmall]}
            placeholder="Any other observations, delays, or important information..."
            multiline
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn}>
          <Ionicons name="save-outline" size={20} color="white" />
          <Text style={styles.saveBtnText}>Save Daily Log</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Switch Web Button */}
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
  backBtn: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  backText: { color: "white", marginLeft: 8, fontSize: 14 },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "bold" },
  headerSubtitle: { color: "#BDC3C7", fontSize: 14 },
  content: { padding: 16, paddingBottom: 100 },
  contextCard: {
    backgroundColor: "#F1F2F6",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  contextLabel: { fontSize: 12, color: "#7F8C8D" },
  contextTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
    marginVertical: 4,
  },
  contextDate: { fontSize: 14, color: "#7F8C8D" },
  sectionCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  inputLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
    marginTop: 10,
  },
  textInput: {
    backgroundColor: "#F1F2F6",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: "#2C3E50",
  },
  textArea: { minHeight: 80, textAlignVertical: "top" },
  textAreaSmall: { minHeight: 60, textAlignVertical: "top" },
  dropdown: {
    backgroundColor: "#F1F2F6",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  safetyCard: { backgroundColor: "#FFF5EB", borderColor: "#FFE0C2" },
  safetyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#873600",
    marginBottom: 15,
  },
  saveBtn: {
    backgroundColor: "#050A14",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  saveBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
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
  },
  switchWebText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 14,
  },
});
