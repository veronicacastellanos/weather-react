import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Stats() {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <li className="stats">
            High
            <br />
            7°C
          </li>
        </div>
        <li className="stats">
          <div className="col-3">
            Low
            <br />
            4°C
          </div>
        </li>
        <div className="col-3">
          <li className="stats">
            Humidity
            <br />
            57%
          </li>
        </div>
        <div className="col-3">
          <li className="stats">
            Wind
            <br />29 KM/H
          </li>
        </div>
      </div>
    </div>
  );
}