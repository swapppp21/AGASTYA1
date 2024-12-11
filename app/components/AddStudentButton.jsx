import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddStudentButton() {
  return (
    <TouchableOpacity
      className="bg-blue-500 w-16 h-16 rounded-full absolute bottom-6 right-6 justify-center items-center shadow-lg"
      onPress={() => alert("Add Student")}
    >
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
}
