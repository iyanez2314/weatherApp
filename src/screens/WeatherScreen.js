import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState({});

  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(URL, {
        params: {
          q: "austin",
          appid: "3db91534e3cc8d2c1467e2b5fadfe168",
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(weatherData.name);

  useEffect(() => {
    fetchWeather();
  }, []);

  if (weatherData.length === 0) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {!weatherData.main ? (
        <Text>Something went wrong!</Text>
      ) : (
        <View style={styles.weatherContainer}>
          <Image
            style={styles.Image}
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            }}
          />
          <Text>Current Weather in {weatherData.name}</Text>
          <Text> Current Temp {weatherData.main.temp}</Text>
          <Text>Feels Like {weatherData.main.feels_like}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  Image: {
    width: 200,
    height: 200,
    backgroundColor: "red",
  },
  weatherContainer: {
    margin: 20,
    backgroundColor: "yellow",
    alignItems: "center",
    margin: 20,
  },
});

export default WeatherScreen;
