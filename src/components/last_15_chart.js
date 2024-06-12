// BasketballChart.js or BasketballChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../ThemeContext';

const Last15Chart = () => {
  const { darkMode, toggleTheme } = useTheme();

  const line = 25;
  const lineArray = new Array(15).fill(line);
  const twoPointers = [24, 20, 22, 28, 26, 24, 30, 22, 28, 20, 26, 30, 28, 24, 26];
  const threePointers = [9, 6, 12, 9, 15, 6, 18, 9, 12, 15, 9, 12, 9, 6, 9];
  const freeThrows = [7, 5, 8, 6, 9, 7, 10, 8, 6, 7, 5, 8, 9, 6, 7];

  const series = [
    {
      data: twoPointers,
      type: 'bar',
      stack: 'a',
      color: '#00b0ff',
      name: '2PT',
    },
    {
      data: threePointers,
      type: 'bar',
      stack: 'a',
      color: '#66cc99',
      name: '3PT',
    },
    {
      data: freeThrows,
      type: 'bar',
      stack: 'a',
      color: '#717981',
      name: 'FT',
    },
    {
      data: lineArray,
      type: 'line',
      lineStyle: {
        width: 3,
      },
      stack: 'b',
      color: '#ff1744',
      name: 'Line',
      label: {
        show: false,
      },
    },
  ];

  const stackInfo = {};
  for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
      const stackName = series[j].stack;
      if (!stackName) {
        continue;
      }
      if (!stackInfo[stackName]) {
        stackInfo[stackName] = {
          stackStart: [],
          stackEnd: [],
        };
      }
      const info = stackInfo[stackName];
      const data = series[j].data[i];
      if (data && data !== 0) {
        if (info.stackStart[i] == null) {
          info.stackStart[i] = j;
        }
        info.stackEnd[i] = j;
      }
    }
  }

  for (let i = 0; i < series.length; ++i) {
    const data = series[i].data;
    const info = stackInfo[series[i].stack];
    for (let j = 0; j < data.length; ++j) {
      const isEnd = info.stackEnd[j] === i;
      const topBorder = isEnd ? 10 : 0;
      const bottomBorder = 0;
      if (data[j] !== 0) {
        data[j] = {
          value: data[j],
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
          },
          label: data[j] !== 25 ? {
            show: true,
            position: 'inside',
            fontWeight: 'bold',
            fontSize: 16,
            formatter: '{c}',
          } : undefined,
        };
      }
    }
  }

  const options = {
    legend: {
        textStyle: {
            fontSize: 17, // Adjust font size for legend labels here
            fontWeigt :'bold'
          },
    },
    xAxis: {
      type: 'category',
      data: ['01/03\nBOS', '01/05\nCHI', '01-07\n@BOS', '02/03\n@BOS', '02/05\n@BOS', '02-07\n@BOS'
        , '03/03\n@BOS', '03/05\n@BOS', '03-07\n@BOS', '04/03\n@BOS', '04/05\n@BOS', '04-07\n@BOS', '05/03\n@MIA', '05/05\nLAC', '05-07\nLAL'],
      axisLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        

      },
    },
    yAxis: {
      type: 'value',
    },
    series: series,
  };

  return (
    <div style={{ width: '100%', height: '100%' }}> {/* Parent container with defined height */}
      <ReactECharts
        option={options}
        style={{ width: '100%', height: '100%' }} // Chart adjusts to the container size
      />
    </div>
  );
};

export default Last15Chart;
