import { ChildrenState, IActionReddit } from "../models/Interfaces";
import { GET_REDDIT, GET_REDDIT_ERROR } from "./actions";


// initialState is empty array 
const initialState = {
  redditReducer: {
    reddit: [],
  },
} as ChildrenState;

//returns reddit array
export function redditReducer(state = initialState, action: IActionReddit) {
  switch (action.type) {
    case GET_REDDIT:
      console.log(`redditReducer -> ${action.payload}`);

      return { ...state, reddit: action.payload };
    case GET_REDDIT_ERROR:
    return { ...state, error: action.payload };

    default:
      return state;
  }
}

// export redditReducer;
