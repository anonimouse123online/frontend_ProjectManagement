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
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name="task-details"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name="document-viewer"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name="daily-log"
        options={{
          tabBarStyle: { display: "none" },
          title: "Daily Log",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>📄</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="task-detail"
        options={{
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name="dailytask"
        options={{
          tabBarStyle: { display: "none" },
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
    </Tabs>
  );
}
