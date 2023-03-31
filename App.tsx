import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";

/* 
**************************
// React Native TODO:
**************************

 4. code explanation and assumption
 8. Redux
 11.provide apk
 12.Github Repo

**************************
// For API Integration
**************************

 1. Request
 2. Response
 3. Data Serive

***************************
// DONE Task
***************************

 Tab 
 Typescript 
 Axios
 Show list of post 
 Hit list for top, new, hot 
 Show
   - image ,
   - title ,
   - author,
   - total votes ,
   - number of comments
 Pull to Refresh
 App icon
 Splash Screen
 Only Portrait


**************************
// PLEASE NOTE:
************************** 
 Open webview -> google.com is opening as url in API is providing jpg image
*/

function App(): JSX.Element {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}

export default App;
