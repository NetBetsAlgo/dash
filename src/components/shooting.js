import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '../ThemeContext';

const ApexChart = () => {
  const { darkMode, toggleTheme } = useTheme();

  const series = [{
    name: '3PT%',
    data: [42, 40, 42, 45, 38, 44, 40] // Example data for 3-point percentage
  }, {
    name: '2PT%',
    data: [55, 54, 53, 48, 52, 58, 56] // Example data for 2-point percentage
  }];

  const options = {
    chart: {
      height: 350,
      type: 'area', // Retain the 'area' chart type
      background: darkMode ? '#333' : '#FFF'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2023-01-03", "2023-01-05", "2023-01-07", "2023-02-03", "2023-02-05", "2023-02-07", "2023-03-03"
      ],
      labels: {
        style: {
          colors: darkMode ? '#FFF' : '#000'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`, // Add '%' sign to y-axis labels
        style: {
          colors: darkMode ? '#FFF' : '#000'
        }
      },
      title: {
        text: 'Shooting %',
        style: {
          color: darkMode ? '#FFF' : '#000'
        }
      }
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}%` // Add '%' sign to tooltip
      }
    },
    theme: {
      mode: darkMode ? 'dark' : 'light'
    }
  };

  return (
    <div>
    
      <div id="chart">
        
      <ReactApexChart options={options} series={series} type="area" height="350px" width="100%" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
