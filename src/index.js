import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux'; /* React önskar configureStore här istället */
import airbeanReducer from './reducers/airbeanReducer.jsx';
import { Provider } from 'react-redux';

/*
* Store - hanterar state
* Reducers - uppdaterar state
* Actions - bestämmer vad som ska uppdateras och med vilken data
*/

// Store - Innehåller state och reducer

const store = createStore(
  airbeanReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();