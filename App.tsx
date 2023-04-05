import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import {StyleSheet, View} from 'react-native'
import { COLOR } from "./constants";

/* 
**************************
// React Native TODO:
**************************

 1.Redux
 2.provide apk

**************************
// For API Integration
**************************

 1. Request
 2. Response
 3. Data Service

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
 Github Repo


**************************
// PLEASE NOTE:
************************** 
 Open webview -> google.com is opening as url in API is providing jpg image
*/

function App(): JSX.Element {
  return (
    <Provider store = {Store}>
      <StatusBar style="auto" />
     
     <View style={styles.bgColor}>
     <Home />
     </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: COLOR.bgColor,
  },

});

export default App;
