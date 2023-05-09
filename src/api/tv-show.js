import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_TOKEN = process.env.REACT_APP_TMDB_API_TOKEN;

export class TVShowAPI {
  static async fetchPopular() {
    // perform the request
    const response = await axios.get(`${BASE_URL}tv/popular`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    console.log(response.data.results);
    // return the response
    return response.data.results;
  }
}
