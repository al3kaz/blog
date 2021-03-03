import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { title, setTitle } = useState("");
  const { content, setContent } = useState("");
  return (
    <View>
      <Text>Enter title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      <Text>Enter content:</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} />
    </View>
  );
};

const style = StyleSheet.create({});

export default CreateScreen;
