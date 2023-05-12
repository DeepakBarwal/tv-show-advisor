import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_TOKEN } from "../constants";

export class TVShowAPI {
  static async fetchPopular() {
    // perform the request
    const response = await axios.get(`${BASE_URL}tv/popular`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    // return the response
    return response.data.results;
    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv?query=${title}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data.results;
  }
}
