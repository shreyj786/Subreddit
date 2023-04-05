import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {redditReducer} from './reducers';

const rootReducer = combineReducers({ redditReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));