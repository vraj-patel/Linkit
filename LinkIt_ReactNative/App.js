/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import Home from './src/views/Home/Home';
import store from './src/store';


const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};



export default App;
