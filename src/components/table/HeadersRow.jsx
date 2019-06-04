import React from 'react';


const HeadersRow = ({ headers = [] }) => (
  <tr className="table-heading">
    {headers.map(header => ( //eslint-disable-line
      <th
        key={header.name}
      >
        <div className="table-heading-labels">
          <p>{header.name}</p>
        </div>
      </th>
    ))
      }
  </tr>
);

export default HeadersRow;
