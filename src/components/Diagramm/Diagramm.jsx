import React from "react";
import ReactApexChart from "react-apexcharts";

const Diagramm = () => {
  const currentDate = new Date();
  const categories = [
    "2:45 AM",
    "3:45 AM",
    "4:45 AM",
    "5:45 AM",
    "6:45 AM",
    "7:45 AM",
    "8:45 AM",
    "9:45 AM",
    "10:45 AM",
    "11:45 AM",
    "12:45 PM",
    "1:45 PM",
    "2:45 PM",
    "3:45 PM",
    "4:45 PM",
    "5:45 PM",
    "6:45 PM",
    "7:45 PM",
    "8:45 PM",
    "9:45 PM",
    "10:45 PM",
    "11:45 PM",
    "0:45 AM",
    "1:45 AM",
    "2:45 AM",
  ].map((time) => {
    const [hour, minutePart] = time.split(":");
    const [minute, period] = minutePart.split(" ");
    let hour24 = parseInt(hour, 10);
    if (period === "PM" && hour24 !== 12) {
      hour24 += 12;
    } else if (period === "AM" && hour24 === 12) {
      hour24 = 0;
    }
    const date = new Date(currentDate);
    date.setHours(hour24);
    date.setMinutes(minute);
    date.setSeconds(0);
    return date.toISOString();
  });

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Price (INR)",
        data: [3060000, 2040000, 3020000, 2980000, 2900000, 2940000, 2920000],
      },
    ],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: categories,
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="line"
      width={"90%"}
      height={450}
    />
  );
};

export default Diagramm;
