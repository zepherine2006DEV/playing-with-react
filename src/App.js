import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';

function App() {
  function sayHi() {
    alert("Hello!!!")
  }
  
  return (
    <div>
      <Header />
      <Navigation />
      <button onClick={sayHi}>Hi</button>
    </div>
  )
}
export default App;
