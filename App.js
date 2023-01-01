import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  'h1',
  { className: 'heading', key: 'h1' },
  'Namaste React!'
);
const heading2 = React.createElement(
  'h2',
  { className: 'heading2', key: 'h2' },
  'Namaste React!'
);

function buttonClick() {
  alert('Clicked');
}
const button = React.createElement(
  'button',
  { key: 'b1', onClick: buttonClick },
  'Click Me!'
);

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2, button]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

//overrides the root element children
root.render(container);
