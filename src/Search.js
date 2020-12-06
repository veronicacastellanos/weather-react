import React from "react";

export default function Form() {
  return (
    <div>
      <form action="text">
        <input
          type="search"
          placeholder="Type a city.."
          autofocus="on"
          autocomplete="off"
          id="city-input"
          className="searchForm"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}