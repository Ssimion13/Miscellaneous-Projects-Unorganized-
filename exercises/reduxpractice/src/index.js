import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import store from "./redux"
import App from './App';




ReactDOM.render(
  <Provider>
  <App />
  </Provider>,
  document.getElementById('root'));
