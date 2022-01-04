import React from "react";
import Card from "./Card.component";

const WeatherDisplay = (props) => {  
  const {City,WeatherData}=props;
  return(
    <div className="weather-display">
      {WeatherData.map((item, index) => (
        <Card item={item} key={index} city={City} day={index+1}/>
      ))}
    </div>
  );
};

export default WeatherDisplay;
