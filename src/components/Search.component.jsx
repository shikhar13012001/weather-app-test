import React, { useState } from "react";
import Key from "./Key.component";
const Search = (props) => {
  const { City, weatherData } = props;
  const [Search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={props.handleProps}>
        <input
          type="text"
          name="search"
          value={Search}
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
      <div className="key-group">
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
        alt=""
        className="card-img"
      />
      <h1>{`${City.name} - ${weatherData.weather[0].description}`}</h1>
        <Key title={"Temperature"} value={weatherData.main.temp} />
        <Key title={"Humidity"} value={weatherData.main.humidity} />
        <Key title={"Feels Like"} value={weatherData.main.feels_like} />
      </div>
    </div>
  );
};

export default Search;
