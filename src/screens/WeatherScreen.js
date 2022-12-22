import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import WeatherCard from "../components/WeatherCard";

const WeatherScreen = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);
  //   const [data, fetchApi] = useResults(userInput);
  const baseURL = ` https://api.openweathermap.org/data/2.5/weather?q=denver&appid=3db91534e3cc8d2c1467e2b5fadfe168`;

  const fetchWeather = async () => {
    const data = await fetch(baseURL).then((response) => response.json());
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View>
      <Text>Weather screen</Text>
      <SearchBar
        onSearch={() => fetchApi()}
        userInput={userInput}
        onUserInput={setUserInput}
      />
      {/* {data.length === 0 ? null : <WeatherCard WeatherCardData={data} />} */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;
