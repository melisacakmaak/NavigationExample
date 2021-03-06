import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

export default function Button({ text, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
