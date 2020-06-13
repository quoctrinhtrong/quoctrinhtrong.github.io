import React, {useState, useEffect, Component} from 'react';
import './App.scss';
import TestMemozation from './component/TestMemozation';

function App() {
  const [number, setNumber] = useState(0);
  const logName = () => {
    console.log('logName');
  }
  return (
    <div className="app">
      <h1 className="app__title">Hello Hooks</h1>
      <button type='button' onClick={()=> setNumber(number+1)}>{`Number: ${number}`}</button>
      <TestMemozation name='memo' logName={logName}/>
    </div>
  );
}

export default App;
