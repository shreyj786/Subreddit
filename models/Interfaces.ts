import { Children } from "./ResponseModel";

export interface IActionReddit {
    type: string;
    payload: Children[];
  }

  export interface ChildrenState {
    redditReducer: {
      reddit: Children[];
    };
  }

  export interface RedditErrorState {
    redditReducer: {
      error: string;
    };
  }

  // for all tabs
export interface TabsInterface {
    tabs: string[];
    activeTab: string;
    setActiveTab: setActiveInterface;
  
  }
  
  // created interface for a function which takes string as parameter
  // and returns void
  export interface setActiveInterface {
    (item: string): void;
  }
  
  // for individual tab
  export interface TabInterface {
      tabName: string;
    activeTab: string;
    onHandleSearchType: setActiveInterface;
  }
  

  // export type DispatchReddit = (arg: IActionReddit) => IActionReddit;
