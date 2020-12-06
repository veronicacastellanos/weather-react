import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./Search";
import Temperature from "./Temperature";
import Stats from "./Stats";
import Forecast from "./Forecast";
import "./App.css";
import "./Search.css";
import "./Temperature.css";
import "./Stats.css";
import "./Forecast.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form />
      <Temperature />
      <Stats />
      <Forecast />
      <p className="Git"><a  href="https://github.com/veronicacastellanos/Weather-App-Project"
        target="_blank" rel="noreferrer">Open Source Code</a> by Verónica Castellanos</p>
      </div>
 );
  }








ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
