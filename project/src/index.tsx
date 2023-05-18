import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { initializeApp } from 'firebase/app';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const firebaseConfig = {
  apiKey: "AIzaSyC5pNU9TZaLFQc0-yfulhMpg6OV-PqbbYo",
  authDomain: "baketracker-83b2d.firebaseapp.com",
  projectId: "baketracker-83b2d",
  storageBucket: "baketracker-83b2d.appspot.com",
  messagingSenderId: "959585910650",
  appId: "1:959585910650:web:ebc208631bd97cc7a0e0c3"
};

const app = initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
      <BrowserRouter>
        <ToastContainer/>
        <App/>
      </BrowserRouter>
    {/*</Provider>*/}

  </React.StrictMode>,
);
