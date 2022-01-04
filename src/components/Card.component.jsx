import React from "react";
import {Link} from "react-router-dom"
import Details from "./Details.component";
const Card = ({ item, city,day }) => {
  return (
    <div className="card-wrapper">
      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
        alt=""
        className="card-img"
      />
      <div className="weather-temp-day">
        <h1>{item.main.temp}<sup><small>o</small></sup>C</h1>
        <h3>{item.weather[0].main}</h3>
        <small> {item.dt_txt.split(" ")[0]}</small>
      </div>
      <Details weather={item} city={city} />
      <Link to={`/${city.name}/${day}`}>
        <button > View Graphicaly</button>
      </Link>
    </div>
  );
};

export default Card;
