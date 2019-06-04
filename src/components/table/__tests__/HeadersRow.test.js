import React from 'react';
import ReactDOM from 'react-dom';
import HeadersRow from '../HeadersRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeadersRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
