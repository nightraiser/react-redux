import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import logo from './logo.svg';
import Page from './Page';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
