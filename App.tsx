/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { FC } from 'react';
 import {store} from "./redux/store"
 import {Provider} from "react-redux"
 import UserList from './components/UserList';
 import SplashScreen from  "react-native-splash-screen";
 import { NavigationContainer } from '@react-navigation/native';
 import UserStackNavigator from "./components/UserStack"
 



 const App :FC = () => {
   React.useEffect(()=>{
     SplashScreen.hide()
   })
  return (
    <Provider store={store}>
     <NavigationContainer>
      <UserStackNavigator/>
    </NavigationContainer>
     
    </Provider>) 

  }
 export default App;


