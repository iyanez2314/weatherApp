import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const WeatherScreen = () => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (input) => {
    console.log(input);
  };

  return (
    <View>
      <Text>Weather screen</Text>
      <SearchBar handleUserInput={handleUserInput} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;
