import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ textAlign: 'center', fontSize: '18px', margin: '10px 0', fontWeight: 'bold' }}>Game Statistics</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#e0e0e0' }}>
            <th style={{ padding: '10px', fontSize: '16px' }}>Date</th>
            <th style={{ padding: '10px', fontSize: '16px' }}>Opponent</th>
            <th style={{ padding: '10px', fontSize: '16px' }}>2PT</th>
            <th style={{ padding: '10px', fontSize: '16px' }}>3PT</th>
            <th style={{ padding: '10px', fontSize: '16px' }}>FT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f1f1f1' }}>
              <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{row.date}</td>
              <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{row.opponent}</td>
              <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{row.twoPointers}</td>
              <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{row.threePointers}</td>
              <td style={{ padding: '10px', fontSize: '14px', textAlign: 'center' }}>{row.freeThrows}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
