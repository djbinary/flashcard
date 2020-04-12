import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCHQr4OxliDI2UlIi60OM8qFnnpv4IYoW4",
  authDomain: "flashcard-6dd12.firebaseapp.com",
  databaseURL: "https://flashcard-6dd12.firebaseio.com",
  projectId: "flashcard-6dd12",
  storageBucket: "flashcard-6dd12.appspot.com",
  messagingSenderId: "703833360183",
  appId: "1:703833360183:web:5d844c55efd17914c53cb2",
  measurementId: "G-CGEDH19TFE"
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
