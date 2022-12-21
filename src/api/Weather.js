import axios from "axios";
export default axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/weather?q=san%20antonio&appid=3db91534e3cc8d2c1467e2b5fadfe168",
});
