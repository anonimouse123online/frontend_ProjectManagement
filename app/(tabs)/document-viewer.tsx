import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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

export default function DocumentViewer() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/(tabs)/task-detail")}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.backText}>Back to Tasks</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Structural Plans - Foundation Level
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Document Metadata Card */}
        <View style={styles.metaCard}>
          <View style={styles.metaHeader}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={32}
              color="black"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.docTitle}>
                Structural Plans - Foundation Level
              </Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>structural</Text>
              </View>
            </View>
          </View>

          <View style={styles.metaGrid}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Category</Text>
              <Text style={styles.metaValue}>Engineering Drawings</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Version</Text>
              <Text style={styles.metaValue}>v2.1</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Size</Text>
              <Text style={styles.metaValue}>12.5 MB</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Uploaded</Text>
              <Text style={styles.metaValue}>2026-01-20</Text>
            </View>
          </View>
        </View>

        {/* Toolbar / Zoom Controls */}
        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.toolBtn}>
            <Ionicons name="remove-circle-outline" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolBtn}>
            <Ionicons name="add-circle-outline" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolBtn}>
            <Ionicons name="expand-outline" size={22} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Document Preview Placeholder */}
        <View style={styles.previewContainer}>
          <Ionicons name="document-text-outline" size={80} color="#BDC3C7" />
          <Text style={styles.previewTitle}>Document Preview</Text>
          <Text style={styles.previewSubtitle}>
            PDF/Blueprint viewer would appear here
          </Text>
          <Text style={styles.previewHint}>
            Supports pinch-to-zoom and pan gestures
          </Text>
        </View>

        {/* Download Button */}
        <TouchableOpacity style={styles.downloadBtn}>
          <Ionicons name="download-outline" size={20} color="white" />
          <Text style={styles.downloadText}>Download for Offline Access</Text>
        </TouchableOpacity>
        <Text style={styles.footerNote}>
          Downloaded documents are available in the 'Offline' tab
        </Text>
      </ScrollView>

      {/* Floating Switch to Web Button */}
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
  backText: { color: "white", marginLeft: 8, fontSize: 14, fontWeight: "500" },
  headerTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
  scrollContent: { padding: 16, paddingBottom: 120 },

  // Metadata Card Styles
  metaCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EEE",
    marginBottom: 16,
  },
  metaHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  titleContainer: { marginLeft: 15, flex: 1 },
  docTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: "#27AE60",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  categoryText: { color: "white", fontWeight: "bold", fontSize: 12 },

  metaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingTop: 15,
  },
  metaItem: { width: "50%", marginBottom: 15 },
  metaLabel: { fontSize: 12, color: "#95A5A6", marginBottom: 2 },
  metaValue: { fontSize: 14, fontWeight: "600", color: "#2C3E50" },

  // Toolbar Styles
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#EEE",
    marginBottom: 16,
  },
  toolBtn: {
    padding: 10,
    width: "30%",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
  },

  // Preview Styles
  previewContainer: {
    backgroundColor: "#EDEFF2",
    borderRadius: 16,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    borderWidth: 1,
    borderColor: "#DDE1E6",
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7F8C8D",
    marginTop: 15,
  },
  previewSubtitle: {
    fontSize: 14,
    color: "#95A5A6",
    textAlign: "center",
    marginTop: 5,
  },
  previewHint: {
    fontSize: 12,
    color: "#BDC3C7",
    textAlign: "center",
    marginTop: 10,
  },

  // Action Styles
  downloadBtn: {
    backgroundColor: "#050A14",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  downloadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  footerNote: {
    textAlign: "center",
    color: "#999",
    fontSize: 12,
    marginTop: 12,
  },

  // Floating Button
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
    elevation: 5,
  },
  switchWebText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 14,
  },
});
