import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; // For edit icon

const CustomView = ({ width = "100%", backgroundColor = "#f8f8f8", label, value, editable = false, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);

  return (
    <View style={[styles.container, { width, backgroundColor }]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: isEditing ? "#fff" : "#e0e0e0" }]}
          value={text}
          editable={isEditing}
          onChangeText={(newText) => {
            setText(newText);
            if (onChange) onChange(newText);
          }}
        />
        {editable && (
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
            <Feather name={isEditing ? "check" : "edit-2"} size={18} color="#666" style={styles.editIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    borderRadius: 8,
    color: "#333",
  },
  editIcon: {
    marginLeft: 10,
  },
});

export default CustomView;
