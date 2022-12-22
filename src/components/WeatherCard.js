import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { KelvinToFh } from "../Helpers/helpers";

const WeatherCard = ({ WeatherCardData }) => {
  const cityName = WeatherCardData.name;
  const feelsLike = WeatherCardData.main.feels_like;
  const WeatherIcon = WeatherCardData.weather.icon;
  const currentTemp = WeatherCardData.main.temp;
  const currentTempConversion = KelvinToFh(currentTemp);
  const conversion = KelvinToFh(feelsLike);
  return (
    <View>
      <Image
        source={{
          uri: ` http://openweathermap.org/img/wn/${WeatherIcon}@2x.png`,
        }}
        style={styles.image}
      />
      <Text>
        Weather in {cityName} is currently {currentTempConversion.toFixed(0)}
      </Text>
      <Text>Feels like {conversion.toFixed(0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default WeatherCard;
