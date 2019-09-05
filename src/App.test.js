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
  expect(result).toMatchSnapshot();
});

test('App includes Header', () => {
  const component = renderer.create(<App  />);
  let result = component.toJSON();
  expect(result).toMatchSnapshot();
});