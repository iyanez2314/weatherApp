// This file will host all the apps screens

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WeatherScreen from "./src/screens/WeatherScreen";

const navigator = createStackNavigator(
  {
    WeatherScreen: WeatherScreen,
  },
  {
    initialRouteName: "WeatherScreen",
    defaultNavigationOptions: {
      title: "Weather App",
    },
  }
);

export default createAppContainer(navigator);
