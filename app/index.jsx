import React, { useEffect, useState } from "react";
import { View, Text, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => {
          router.push("/StudentList");
        });
      }, 1500);
    });
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
        opacity: fadeAnim,
        marginBottom: 100,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold", color: "#2563eb" }}>
        Welcome to
      </Text>
      <Text style={{ fontSize: 60, fontWeight: "bold", color: "#2563eb" }}>
        AGASTYA
      </Text>
    </Animated.View>
  );
}
