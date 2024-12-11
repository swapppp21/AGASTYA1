import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function StudentCard({ student, onPress, onToggleCheckbox }) {
  return (
    <TouchableOpacity
      className="bg-white rounded-[0.9rem] h-36 shadow-md p-4 mb-6 flex-col border-[0.5px] border-[#DCDCDC] ml-4 mr-4"
      onPress={onPress} 
    >
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: student.profilePicture }}
            className="w-12 h-12 rounded-full mr-4"
          />
          <Text className="text-lg font-bold text-gray-800">{student.name}</Text>
        </View>

        <TouchableOpacity
          className={`w-7 h-7 border-2 rounded-md ${
            student.isSelected ? "bg-gray-800" : "border-gray-400"
          }`}
          onPress={(e) => {
            e.stopPropagation(); 
            onToggleCheckbox(); 
          }}
        >
          {student.isSelected && (
            <AntDesign name="check" size={20} color="white" style={{ alignSelf: "center" }} />
          )}
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mt-4">
        <Text className="text-gray-500 font-light">Classes</Text>
        <Text className="text-gray-800 font-medium">{student.class}</Text>
      </View>
    </TouchableOpacity>
  );
}
