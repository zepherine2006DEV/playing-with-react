import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  function sayHi() {
    alert("Hello!!!")
  }
  
  return (
    <div>
      <Header />
      <button onClick={sayHi}>Hi</button>
    </div>
  )
}
export default App;
