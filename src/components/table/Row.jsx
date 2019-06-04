
import React from 'react';

function Row({ rowData, columns = [] }) {
  return (
    <tr>
      {columns.map(({ key, circle }, index) => (
        <td key={`cell-${index}`}>
          {circle ? (
            <svg height="30" width="30">
              <circle cx="15" cy="15" fill={rowData[key]} r="5" />
            </svg>
          ) : rowData[key]}
        </td>
      ))}
    </tr>
  );
}

export default Row;
