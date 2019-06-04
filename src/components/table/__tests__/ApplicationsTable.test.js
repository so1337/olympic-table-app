import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationsTable from '../ApplicationsTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationsTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
