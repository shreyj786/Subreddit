
import { Children } from '../models/ResponseModel';
import { GET_REDDIT } from './actions';

export interface ChildrenState{
    reddit: Children[]
}

const initialState = {
    reddit: [],
} as ChildrenState

function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case GET_REDDIT:
            console.log(`userReducer -> ${action.payload}`);
            
            return { ...state, reddit: action.payload };
        default:
            return state;
    }
}

export default userReducer;

