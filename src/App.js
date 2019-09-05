import React from 'react';
import './App.css';

function App() {
  function sayHi() {
    alert("Hello!!!")
    //return <p>Hi Computer</p>
  }
  
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={sayHi}>Hi</button>
    </div>
  )
}
export default App;
