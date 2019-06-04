import React from 'react';

import Row from './Row';

const DataRows = ({ data = [], columns }) => (
  <tbody>
    {data && data.map((rowData, index) => (
      <Row
        key={`row-${index}`}
        columns={columns}
        rowData={rowData}
      />
    ))
  }
  </tbody>
);

export default DataRows;
