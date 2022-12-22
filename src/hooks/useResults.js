import React, { useEffect, useState } from "react";
import axios from "axios";

export default (userInput) => {
  const [data, setData] = useState([]);
  const baseURL = ` https://api.openweathermap.org/data/2.5/weather?q=denver&appid=3db91534e3cc8d2c1467e2b5fadfe168`;

  const fetchApi = async () => {
    console.log("Fetching...");
    fetch(baseURL)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    console.log("Data =>", data);
  };

  //   useEffect(() => {
  //     fetchApi(baseURL);
  //   }, []);

  return [data, fetchApi];
};
