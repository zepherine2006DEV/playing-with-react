import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders "Hello World!', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   expect(div.textContent).toBe('Hello World');
// });

describe("Header",() =>{
  it('Displays "Hello World', () => {
    const div =document.createElement('div');
    ReactDOM.render(<Header />, div);
    expect(div.textContent).toBe('Hello World');
  });
});