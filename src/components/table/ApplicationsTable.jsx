import React from 'react';

import HeadersRow from './HeadersRow';
import DataRows from './DataRows';

function ApplicatonsTable({ columns = [], applications = [] }) {
  return (
    <table className="table table-bordered table-white table-hover table-admin">
      <thead>
        <HeadersRow
          headers={columns}
        />
      </thead>
      <DataRows
        columns={columns}
        data={applications}
      />
    </table>
  );
}

export default ApplicatonsTable;
