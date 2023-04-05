import axios from "axios";
import { ResponseModel } from "../models/ResponseModel";

export const GET_REDDIT = "GET_REDDIT";
export const GET_REDDIT_ERROR = "GET_REDDIT_ERROR";

// General Reddit API endpoint
const API_URL = (endpoint: string) =>
  `https://api.reddit.com/r/pics/${endpoint.toLowerCase()}.json?limit=10`;

/**
 *  `getReddit` action method which is called from the `Home` screen
 * and returns reddit data as an `Children[]`
 */
export const getReddit = (endpoint: string) => {
  console.log(`endpoint -> ${endpoint}`);

  var newEndpoint: string ; 
    if(endpoint === "Popular"){
      newEndpoint = "new"
    }else {
      newEndpoint = endpoint
    }

  return async (dispatch: any) => {
    try {
      const response = await axios.get<ResponseModel>(API_URL(newEndpoint));

      console.log(`response -> ${response?.data?.data?.children} `);

      dispatch({
        type: GET_REDDIT,
        payload: response?.data?.data?.children,
      });
    } catch (e) {
      console.log((e as Error).message);

      dispatch({
        type: GET_REDDIT_ERROR,
        payload: (e as Error).message,
      });
    }
  };
};
