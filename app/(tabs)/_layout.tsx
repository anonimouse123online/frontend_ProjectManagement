import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {/* HomeScreen as index, tab hidden */}
      <Tabs.Screen
        name="index" // your HomeScreen
        options={{
          tabBarStyle: { display: "none" }, // hide bottom tab
        }}
      />

      {/* Example of another screen in tabs */}
      <Tabs.Screen
        name="daily-log"
        options={{
          title: "Daily Log",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>📄</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile" // your HomeScreen
        options={{
          tabBarStyle: { display: "none" }, // hide bottom tab
        }}
      />
      <Tabs.Screen
        name="dailytask" // your HomeScreen
        options={{
          tabBarStyle: { display: "none" }, // hide bottom tab
        }}
      />
      <Tabs.Screen
        name="issues"
        options={{
          title: "Issues",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>⚠️</Text>
          ),
        }}
      />

      {/* Add more screens here as needed */}
    </Tabs>
  );
}
