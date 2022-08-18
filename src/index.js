import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App';

import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBtdZP_dT-P2zbFmpDCL8R7YSWvb7zH2RY",
  authDomain: "nikestore-9eb67.firebaseapp.com",
  projectId: "nikestore-9eb67",
  storageBucket: "nikestore-9eb67.appspot.com",
  messagingSenderId: "609046371518",
  appId: "1:609046371518:web:8cd9436cf8a5fbb9f852ef"
};
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
