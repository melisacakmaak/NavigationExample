import React, { useState } from "react";
import { View, Alert } from "react-native";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function MemberSign({ navigation }) {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);

  function handleSubmit() {
    if (!name || !lastName || !age || !email) {
      Alert.alert("Complete All User Information");
    }

    const user = {
      name,
      lastName,
      age,
      email,
    };

    navigation.navigate("MemberPages", { user });
  }

  return (
    <View style={{ flex:1, backgroundColor: "darkseagreen", justifyContent:'center' }}>
      <View style={{ paddingTop: 30, backgroundColor: "darkseagreen" }}>
      <Input
        label="Member Name:"
        placeholder="Enter member name.."
        onChangesText={setName}
      />
      <Input
        label="Member Surname:"
        placeholder="Enter member surname.."
        onChangesText={setLastName}
      />
      <Input
        label="Member Age:"
        placeholder="Enter member age.."
        onChangesText={setAge}
      />
      <Input
        label="Member e-mail:"
        placeholder="Enter member e-mail.."
        onChangesText={setEmail}
      />
      <Button text="Complete Member Registration" onPress={handleSubmit} />
    </View>
    </View>
    
  );
}
