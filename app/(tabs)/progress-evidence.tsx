import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
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
  const [media, setMedia] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- MEDIA LOGIC ---

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Needed",
        "Allow camera access to capture progress photos.",
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"], // Updated to use array format
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setMedia(result.assets[0].uri);
    }
  };

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // Restricted to images only
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setMedia(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert("Success", "Evidence submitted successfully!", [
        { text: "OK", onPress: () => router.back() },
      ]);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.backText}>Back to Task</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Progress Evidence</Text>
        <Text style={styles.headerSubtitle}>
          Capture photos of work completed
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contextCard}>
          <Text style={styles.contextLabel}>Documenting progress for:</Text>
          <Text style={styles.contextTitle}>
            Foundation Excavation - Section A
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Capture Media</Text>

          <TouchableOpacity style={styles.primaryMediaBtn} onPress={takePhoto}>
            <Ionicons name="camera" size={22} color="white" />
            <Text style={styles.primaryMediaBtnText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryMediaBtn}
            onPress={pickFromGallery}
          >
            <Ionicons name="images-outline" size={22} color="black" />
            <Text style={styles.secondaryMediaBtnText}>
              Upload from Gallery
            </Text>
          </TouchableOpacity>

          {/* Media Preview Area */}
          {media && (
            <View style={styles.previewContainer}>
              <Text style={styles.previewLabel}>Attachment Preview:</Text>
              <Image source={{ uri: media }} style={styles.previewImage} />
              <TouchableOpacity
                onPress={() => setMedia(null)}
                style={styles.removeBtn}
              >
                <Ionicons name="trash-outline" size={16} color="#E53E3E" />
                <Text style={styles.removeText}>Remove Photo</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Progress Notes</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Describe the work completed..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={[styles.sectionCard, styles.autoDataCard]}>
          <Text style={[styles.sectionTitle, { color: "#1A365D" }]}>
            Auto-Captured Data
          </Text>
          <View style={styles.dataRow}>
            <Ionicons name="location" size={18} color="#E53E3E" />
            <Text style={styles.dataText}>GPS: 10.3157° N, 123.8854° E</Text>
          </View>
          <View style={styles.dataRow}>
            <Ionicons name="time" size={18} color="#718096" />
            <Text style={styles.dataText}>2/5/2026, 8:48:20 PM</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.submitBtn,
            (!media || isSubmitting) && { backgroundColor: "#ccc" },
          ]}
          disabled={!media || isSubmitting}
          onPress={handleSubmit}
        >
          {isSubmitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Ionicons name="cloud-upload-outline" size={22} color="white" />
              <Text style={styles.submitBtnText}>Submit Progress Evidence</Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
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
  previewContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
  },
  previewLabel: { fontSize: 12, color: "#666", marginBottom: 8 },
  previewImage: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    backgroundColor: "#000",
  },
  removeBtn: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  removeText: { color: "#E53E3E", marginLeft: 5, fontWeight: "bold" },
  notesInput: {
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    fontSize: 15,
  },
  autoDataCard: { backgroundColor: "#EBF8FF", borderColor: "#BEE3F8" },
  dataRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  dataText: { marginLeft: 10, color: "#2D3748", fontSize: 14 },
  submitBtn: {
    backgroundColor: "#27AE60",
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
});
