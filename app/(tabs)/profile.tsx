import BottomNavbar from "@/components/BottomNavbar";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const [user, setUser] = useState({
    name: "",
    role: "",
    email: "",
    contact: "",
    project: "",
    employeeId: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = {
        name: "Engr. Kurt Paul Perocillo",
        role: "Site Engineer",
        email: "kurtpaul@company.com",
        contact: "+63 9XX XXX XXXX",
        project: "Residential Building – Site 12",
        employeeId: "SE-2024-019",
        avatar: "https://i.pravatar.cc/150?img=12",
      };

      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Avatar */}
        <Image source={{ uri: user.avatar }} style={styles.avatar} />

        {/* Name & Role */}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>

        {/* Info Cards */}
        <InfoCard label="Email" value={user.email} />
        <InfoCard label="Contact No." value={user.contact} />
        <InfoCard label="Project Assigned" value={user.project} />
        <InfoCard label="Employee / License ID" value={user.employeeId} />

        {/* Actions */}
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Edit Profile</Text>
        </Pressable>

        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>

      <BottomNavbar />
    </View>
  );
}

type InfoCardProps = {
  label: string;
  value: string;
};

function InfoCard({ label, value }: InfoCardProps) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "—"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
  },

  content: {
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#1e3a8a",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e3a8a",
  },

  role: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 24,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  label: {
    fontSize: 13,
    color: "#64748b",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },

  primaryButton: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  logoutButton: {
    marginTop: 12,
  },

  logoutText: {
    color: "#dc2626",
    fontSize: 14,
    fontWeight: "600",
  },
});
