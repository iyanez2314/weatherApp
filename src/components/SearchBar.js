import React from "react";
import { TextInput, Text, View } from "react-native";
const SearchBar = ({ handleUserInput }) => {
  return (
    <View>
      <TextInput onChangeText={handleUserInput} placeholder="Search" />
    </View>
  );
};

export default SearchBar;
