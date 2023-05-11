// import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
// import { BASE_URL, API_TOKEN } from "../constants";

export class TVShowAPI {
  static async fetchPopular() {
    try {
      // // perform the request
      // const response = await axios.get(`${BASE_URL}tv/popular`, {
      //   headers: {
      //     Authorization: `Bearer ${API_TOKEN}`,
      //   },
      // });
      // // return the response
      // return response.data.results;
      return FAKE_POPULARS;
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchRecommendations(tvShowId) {
    try {
      // const response = await axios.get(
      //   `${BASE_URL}tv/${tvShowId}/recommendations`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${API_TOKEN}`,
      //     },
      //   }
      // );
      // return response.data.results;
      return FAKE_RECOMMENDATIONS;
    } catch (error) {
      console.error(error);
    }
  }
}
