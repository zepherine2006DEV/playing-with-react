import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import renderer from 'react-test-renderer';
import { testNameToKey } from 'jest-snapshot/build/utils';

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

test('exploring snapshot', () => {
  const component = renderer.create(<Header />);
  let result = component.toJSON();
  console.log(result);
  expect(result).toMatchSnapshot();
});