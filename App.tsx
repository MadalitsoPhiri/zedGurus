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




 const App :FC = () => {
  return (
    <Provider store={store}>
        <UserList/>
    </Provider>) 

  }
 export default App;


