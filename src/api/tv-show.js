// import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";
// import { BASE_URL, API_TOKEN } from "../constants";

export class TVShowAPI {
  static async fetchPopular() {
    // // perform the request
    // const response = await axios.get(`${BASE_URL}tv/popular`, {
    //   headers: {
    //     Authorization: `Bearer ${API_TOKEN}`,
    //   },
    // });
    // // return the response
    // return response.data.results;
    return FAKE_POPULARS;
  }
}
