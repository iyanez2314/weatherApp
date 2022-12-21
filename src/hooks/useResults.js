import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [data, setData] = useState([]);
  const baseURL =
    "https://api.openweathermap.org/data/2.5/weather?q=san%20antonio&appid=3db91534e3cc8d2c1467e2b5fadfe168";

  const fetchApi = async () => {
    console.log("Fetching...");
    try {
      axios({
        method: "GET",
        url: baseURL,
      }).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }

    console.log("Data =>", data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return [data, fetchApi];
};
