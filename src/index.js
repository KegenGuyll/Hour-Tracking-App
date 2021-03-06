import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import '../src/firebaseConfig';
import Login from './components/Login';
import 'react-toastify/dist/ReactToastify.css';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    ReactDOM.render(<App />, document.getElementById('root'));
  } else {
    ReactDOM.render(<Login />, document.getElementById('root'));
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
