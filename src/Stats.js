import React from "react";

export default function Stats() {
  return (
    <div>
      <div class="row">
        <div class="col-3">
          <li className="stats">
            High
            <br />
            7°C
          </li>
        </div>
        <li className="stats">
          <div class="col-3">
            Low
            <br />
            4°C
            <span id="low-temp"></span>
          </div>
        </li>
        <div class="col-3">
          <li className="stats">
            Humidity
            <br />
            57%
            <span id="humidity"></span>
          </li>
        </div>
        <div class="col-3">
          <li className="stats">
            Wind
            <br />29 KM/H
            <span id="wind-speed"></span>
          </li>
        </div>
      </div>
    </div>
  );
}