import React from "react";

const Details = ({weather,city}) => {
    const sunrise=(new Date(city.sunrise*1000).toTimeString().split(" ")[0])
    const sunset=(new Date(city.sunset*1000).toTimeString().split(" ")[0])
  return (
    <div className="details">
      <div>
        <p>{`${weather.main.temp_min}/${weather.main.temp_max}`}</p>
        <small>Hi/Lo</small>
      </div>
      <div>
        <p>{weather.main.humidity}%</p>
        <small>Humidity</small>
      </div>
      <div>
        <p>{sunrise}</p>
        <small>Sunrise</small>
      </div>
      <div>
        <p>{sunset}</p>
        <small>Sunset</small>
      </div>
      <div>
        <p>lat: {city.coord.lat} lon: {city.coord.lon}</p>
        <small>Geo</small>
      </div>
    </div>
  );
};

export default Details;
