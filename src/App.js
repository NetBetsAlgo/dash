import React, { useEffect } from 'react';
import Last15Chart from './components/last_15_chart';
import { ThemeProvider, useTheme } from './ThemeContext';
import ApexChart from './components/shooting';
import './App.css'; 
import DataTable from './components/table';

const AppContent = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', darkMode ? '#2c343c' : '#FFF');
    document.documentElement.style.setProperty('--text-color', darkMode ? '#FFF' : '#000');
    document.documentElement.style.setProperty('--box-shadow-color', darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)');
    document.documentElement.style.setProperty('--table-background-color', darkMode ? '#2c343c' : '#FFF');
    document.documentElement.style.setProperty('--table-header-color', darkMode ? '#2c2c2c' : '#e0e0e0');
    document.documentElement.style.setProperty('--table-row-even-color', darkMode ? '#2c343c' : '#FFF');
    document.documentElement.style.setProperty('--table-row-odd-color', darkMode ? '#2c343c' : '#ffffff');
  }, [darkMode]);

  const data = [
    { date: '01/03', opponent: 'BOS', twoPointers: 24, threePointers: 9, freeThrows: 7 },
    { date: '01/05', opponent: 'CHI', twoPointers: 20, threePointers: 6, freeThrows: 5 },
    { date: '01-07', opponent: '@BOS', twoPointers: 22, threePointers: 12, freeThrows: 8 },
    { date: '02/03', opponent: '@BOS', twoPointers: 28, threePointers: 9, freeThrows: 6 },
    { date: '02/05', opponent: '@BOS', twoPointers: 26, threePointers: 15, freeThrows: 9 },
    { date: '02-07', opponent: '@BOS', twoPointers: 24, threePointers: 6, freeThrows: 7 },
    { date: '03/03', opponent: '@BOS', twoPointers: 30, threePointers: 18, freeThrows: 10 },
    { date: '03/05', opponent: '@BOS', twoPointers: 22, threePointers: 9, freeThrows: 8 },
    { date: '03-07', opponent: '@BOS', twoPointers: 28, threePointers: 12, freeThrows: 6 },
    { date: '04/03', opponent: '@BOS', twoPointers: 20, threePointers: 15, freeThrows: 7 },
    { date: '04/05', opponent: '@BOS', twoPointers: 26, threePointers: 9, freeThrows: 5 },
    { date: '04-07', opponent: '@BOS', twoPointers: 30, threePointers: 12, freeThrows: 8 },
    { date: '05/03', opponent: '@MIA', twoPointers: 28, threePointers: 9, freeThrows: 9 },
    { date: '05/05', opponent: 'LAC', twoPointers: 24, threePointers: 6, freeThrows: 6 },
    { date: '05-07', opponent: 'LAL', twoPointers: 26, threePointers: 9, freeThrows: 7 },
  ];

  return (
    <>
      <div className="toggle-button-container">
        <button onClick={toggleTheme} className="toggle-button">
          Toggle Theme
        </button>
      </div>
      <div className="horizontal-container">
        <div className="chart-container last15-chart-container">
          <Last15Chart />
        </div>
        <div className="data-table-container">
          <DataTable data={data} />
        </div>
      </div>
      <div className="chart-container apex-chart-container">
        <ApexChart />
      </div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <AppContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
