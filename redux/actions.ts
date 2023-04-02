import axios from "axios";
import { Children, ResponseModel } from "../models/ResponseModel";
import { Action, Dispatch } from "redux";


export const GET_REDDIT = 'GET_REDDIT'; 

const API_URL = (endpoint:string) => (`https://api.reddit.com/r/pics/${endpoint.toLowerCase()}.json?limit=10`)


export interface IActionReddit {
    type: string;
    payload: Children[];
  }

 export type DispatchReddit = (arg: IActionReddit) => (IActionReddit);

export const getReddit = (endpoint:string) => {
    try {
        // : (arg0: { type: string; payload: Children[]; }) => void
        return async (dispatch: DispatchReddit) => {
            const response = await axios.get<ResponseModel>(API_URL(endpoint));

            console.log(`response -> ${response.data.data.children}`);
            
            dispatch ({
                type: GET_REDDIT,
                payload: response.data.data.children
            });
        }
    } catch (e) {
        console.log((e as Error).message);
    }
}
