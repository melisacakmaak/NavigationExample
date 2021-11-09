import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MemberPages({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Member Registration Successfully Completed
      </Text>
      <Text style={styles.text}>Member Name: {user.name} </Text>
      <Text style={styles.text}>Member Surname: {user.lastName} </Text>
      <Text style={styles.text}>Member Age: {user.age}</Text>
      <Text style={styles.text}>Member e-mail: {user.email} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "darkseagreen",
  },
  text: {
    fontSize: 25,
    fontWeight: "300",
    padding: 5,
    textAlign: "left",
    textDecorationLine: "underline",
  },
  header: {
    fontSize: 40,
    paddingBottom: 50,
    textAlign: "center",
    fontWeight: "600",
  },
});
