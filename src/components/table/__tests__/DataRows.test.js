import React from 'react';
import ReactDOM from 'react-dom';
import DataRows from '../DataRows';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataRows />, div);
  ReactDOM.unmountComponentAtNode(div);
});
