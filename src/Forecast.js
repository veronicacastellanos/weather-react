import React from "react";

export default function Forecast() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <li className="forecast">
            Monday 10° / 4°
            <br />
            <br />
          </li>
        </div>
        <div className="col-2">
          <li className="forecast">
            Tuesday
            <br />
            8° / -1°
            <br />
          </li>
        </div>
        <div className="col-2">
          <li className="forecast">
            Wednesday
            <br />
            8° / 3°
            <br />
          </li>
        </div>
        <div className="col-2">
          <li className="forecast">
            Thursday
            <br />
            11° / 9°
            <br />
          </li>
        </div>
        <div className="col-2">
          <li className="forecast">
            Friday
            <br />
            14° / 9°
            <br />
          </li>
        </div>
        <div className="col-2">
          <li className="forecast">
            Saturday
            <br />
            13° / 4°
            <br />
          </li>
        </div>
      </div>
    </div>
  );
}