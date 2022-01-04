import React, { useState, useEffect } from "react";
import WeatherDisplay from "../components/WeatherDisplay.component";
import Search from "../components/Search.component";
const Home = () => {
  const [SearchCity, setSearchCity] = useState("lucknow");
  const handleProps = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setSearchCity(data.get("search"));
  };
  const [WeatherData, setWeatherData] = useState(null);
  const [City, setCity] = useState(null);
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, [SearchCity]);
  const FetchData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${SearchCity}&units=metric&appid=540afb19dacf2cc4dd1cd6b4c43231f4`
    );
    const data = await res.json();
    const weathData = [];
    for (let i = 0; i < 40; i += 8) {
      weathData.push(data.list[i]);
    }
    setWeatherData(weathData);
    setCity(data.city);
  };
  return (
    WeatherData &&
    City && (
      <div className="container">
        <WeatherDisplay
          SearchCity={SearchCity}
          WeatherData={WeatherData}
          City={City}
        />
        <Search handleProps={handleProps}  weatherData={WeatherData[0]} City={City} />
      </div>
    )
  );
};

export default Home;
