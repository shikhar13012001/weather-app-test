import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const Graph = (props) => {
  const city = props.match.params.city;
  const day = props.match.params.day;
  const [hourly, setHourly] = useState(null);
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, []);
  const FetchData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=540afb19dacf2cc4dd1cd6b4c43231f4`
    );
    const data = await res.json();
    const arr = [];
    const tt=[];
    for (let i = (day - 1) * 8; i < day * 8; i++) {
      arr.push(data.list[i].dt_txt.split(" ")[1]);
      tt.push(data.list[i].main.temp);
    }
    setHourly(arr);
    setTemp(tt);
    console.log(arr,tt);
  };

  const data = {
    labels: hourly,
    datasets: [
      {
        label: "Temp",
        data: temp,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return temp&&hourly&&(<Line options={options} data={data} />);
};
export default withRouter(Graph);
