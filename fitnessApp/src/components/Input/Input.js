import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./Input.style";

export default function Input({ placeholder, label, onChangesText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label}</Text>
      <View style={styles.labelContainer}>
        <TextInput placeholder={placeholder} onChangeText={onChangesText} />
      </View>
    </View>
  );
}
