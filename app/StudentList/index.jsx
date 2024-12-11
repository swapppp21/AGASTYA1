import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import StudentCard from "../components/StudentCard";
import AddStudentButton from "../components/AddStudentButton";
import BottomSheet from "../components/BottomSheet";
import { students as studentData } from "../../data/students";

export default function StudentList() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false); 
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState(studentData);
  const [selectAll, setSelectAll] = useState(false);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelectAll = () => {
    setSelectAll((prev) => !prev);
    const updatedStudents = students.map((student) => ({
      ...student,
      isSelected: !selectAll,
    }));
    setStudents(updatedStudents);
  };

  const handleInvitePress = () => {
    alert("Invite selected students");
  };

  const handleDeletePress = () => {
    const updatedStudents = students.filter((student) => !student.isSelected);
    setStudents(updatedStudents);
    setSelectAll(false);
  };

  const handleSearchIconPress = () => {
    setIsSearchActive((prev) => !prev);
    if (!isSearchActive) setSearchQuery(""); 
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-white px-4 py-3 shadow-sm">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://em-content.zobj.net/thumbs/240/apple/325/student-light-skin-tone_1f9d1-1f3fb-200d-1f393.png",
            }}
            className="w-6 h-6 mr-2"
          />
          <Text className="text-xl font-semibold text-black">Student List</Text>
        </View>

        <View className="flex-row space-x-4">
          <TouchableOpacity className="mr-4" onPress={handleSearchIconPress}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      {isSearchActive && (
        <View className="p-2">
          <TextInput
            className="bg-white border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Search by name"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      )}

      {/* Title Section */}
      <View className="p-4 flex-row justify-between items-center">
        <View className="flex-row items-center space-x-4">
          <Text className="text-2xl font-semibold text-gray-800">All Students</Text>
          <Text className="ml-2 px-2 rounded-md text-white bg-gray-800">
            {filteredStudents.length}
          </Text>
        </View>

        <View className="flex-row items-center space-x-4">
          {students.some((student) => student.isSelected) && (
            <TouchableOpacity className="mr-6" onPress={handleInvitePress}>
              <Text className="text-blue-500 font-semibold text-lg">Invite</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={toggleSelectAll}>
            <View
              className={`w-7 h-7 border-2 rounded-md ${
                selectAll ? "bg-gray-800" : "border-gray-400"
              }`}
            >
              {selectAll && (
                <AntDesign
                  name="check"
                  size={20}
                  color="white"
                  style={{ alignSelf: "center" }}
                />
              )}
            </View>
          </TouchableOpacity>
          {students.some((student) => student.isSelected) && (
            <TouchableOpacity className="mr-1 ml-6" onPress={handleDeletePress}>
              <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Student List */}
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            student={item}
            onPress={() => setSelectedStudent(item)}
            onToggleCheckbox={() =>
              setStudents((prev) =>
                prev.map((student) =>
                  student.id === item.id
                    ? { ...student, isSelected: !student.isSelected }
                    : student
                )
              )
            }
          />
        )}
      />

      <AddStudentButton />

      {selectedStudent && (
        <BottomSheet
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </View>
  );
}
