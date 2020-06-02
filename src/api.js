import axios from "axios";

export const dataAPI = {
  getData() {
    return axios.get("https://nomen1.github.io/test-task/data.json");
  }
};
