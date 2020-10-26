import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import {createStore} from 'redux';
import {loadState, saveState} from "./localStorage.js"
import {throttle} from "lodash";


import App from "./components/app/app.jsx"


const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.subscribe(throttle(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
}, 1000));

const init = () => {
  ReactDOM.render(
    <Provider store={store} basename={process.env.PUBLIC_URL}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();