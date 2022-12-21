import React from "react";
import { TextInput, Text, View } from "react-native";
const SearchBar = ({ onSearch, userInput, onUserInput }) => {
  return (
    <View>
      <TextInput
        value={userInput}
        onChangeText={onUserInput}
        placeholder="Search"
        autoCorrect={false}
        onEndEditing={onSearch}
      />
    </View>
  );
};

export default SearchBar;
