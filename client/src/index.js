import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/router';
import { Provider } from 'react-redux'
//
// import './firebase/firebase'

import Store from './store/Store';
import {startSetExpenses} from "./actions/expenses";
import { login, logout } from "./actions/authGoogle";

import 'normalize.css/normalize.css';
import './stylesheets/style.css';
import registerServiceWorker from './registerServiceWorker';
import {firebase} from "./firebase/firebase";

const store = Store();

ReactDOM.render(<h2>Loading ...... </h2>, document.getElementById('root'));

const JSX = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(JSX, document.getElementById('root'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/home');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});


registerServiceWorker();

