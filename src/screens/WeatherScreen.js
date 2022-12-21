import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const WeatherScreen = () => {
  const [userInput, setUserInput] = useState("");
  const [data, fetchApi] = useResults();

  return (
    <View>
      <Text>Weather screen</Text>
      <SearchBar
        onSearch={() => fetchApi()}
        userInput={userInput}
        onUserInput={setUserInput}
      />
      <Text>User input: {userInput}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;
