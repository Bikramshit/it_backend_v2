import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import { Store } from './Redux/Store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_NODE === 'production') {
   console.log = () => {}
   console.error = () => {}
   console.debug = () => {}
   console.warn =()=>{}
   console.info =()=>{}
   
 }


root.render(
   <Provider store={Store}>
      <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
   </Provider>
);

reportWebVitals();
