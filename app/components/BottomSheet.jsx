import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { BlurView } from "expo-blur";

export default function BottomSheet({ student, onClose, onEdit }) {
  if (!student) {
    return null;
  }

  return (
    <Modal transparent={true} animationType="slide">
      {/* Blur Effect in Background */}
      <BlurView intensity={850} className="absolute top-0 left-0 right-0 bottom-0 z-0" />

      <View className="flex-1 justify-end z-10">
        <View className="bg-white border-[0.1rem] border-gray-200 rounded-t-3xl p-6">
          {/* Header Section */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold">Personal Information</Text>
            <View className="flex-row space-x-4">
              {/* Edit Icon */}
              <TouchableOpacity onPress={onEdit}>
              <Image
                source={require('../../assets/images/edit.png')} 
                style={{ width: 20, height: 20 , marginRight: 10 }} 
              />
            </TouchableOpacity>
            
            {/* Add User Icon */}
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/AddUser.png')} 
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
            </TouchableOpacity>
            

              {/* Close Icon */}
                 
              <TouchableOpacity onPress={onClose}>
              <Image
              source={require('../../assets/images/cross.png')} 
              style={{ width: 20, height: 20 }} 
              />
            </TouchableOpacity>
            </View>
          </View>

          {/* Personal Information Card */}
          <View className="bg-white border-[0.08rem] border-gray-200 rounded-lg px-5 py-10 mb-6 shadow-sm">
            <Image
              source={{ uri: student.profilePicture }}
              className="w-16 h-16 rounded-full mr-4"
            />
            <Text className="text-lg font-bold mb-8">{student.name}</Text>

            <View className="flex flex-row justify-between items-center mb-4">
              <View>
                <Text className="text-gray-500 font-thin text-sm">Registration No.</Text>
                <Text className="text-black text-base font-semibold">
                  {student.registrationNumber}
                </Text>
              </View>

              <View className="mr-28">
                <Text className="text-gray-500 font-thin text-sm">Date of Birth</Text>
                <Text className="text-black text-base font-semibold">{student.dob}</Text>
              </View>
            </View>

            <View className="flex flex-row justify-between items-center mt-5">
              <View className="mr-6">
                <Text className="text-gray-500 text-sm font-thin ">Mobile</Text>
                <Text className="text-sky-600 underline">{student.guardianMobile}</Text>
              </View>

              <View>
                <Text className="text-gray-500 text-sm font-thin ">Email Address</Text>
                <Text className="text-sky-600 underline">{student.studentEmail}</Text>
              </View>
            </View>
          </View>

          {/* Guardian Information Header */}
          <View>
            <Text className="text-lg font-bold mb-4">Guardian Information</Text>
          </View>

          {/* Guardian Information Card */}
          <View className="bg-white border-[0.08rem] border-gray-200 rounded-lg px-5 pb-8 pt-3 shadow-sm">
            <Image
              source={{ uri: student.profilePicture }}
              className="w-16 h-16 rounded-full mr-4"
            />
            <Text className="text-lg font-bold mt-2">{student.guardianName}</Text>

            <View className="flex flex-row justify-between items-center mt-5">
              <View className="mr-6">
                <Text className="text-gray-500 text-sm font-thin ">Mobile</Text>
                <Text className="text-sky-600 underline">{student.guardianMobile}</Text>
              </View>

              <View>
                <Text className="text-gray-500 text-sm font-thin">Email Address</Text>
                <Text className="text-sky-600 underline">{student.guardianEmail}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
