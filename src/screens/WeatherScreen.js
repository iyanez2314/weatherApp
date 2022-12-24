import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(URL, {
        params: {
          q: "Denver",
          appid: "3db91534e3cc8d2c1467e2b5fadfe168",
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weatherData) {
    return (
      <View>
        <Text>Fetching....</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Weather screen</Text>
      <Text></Text>
      <Text>Temp: {weatherData.main.temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;
