import React from 'react';
import App from './App';
import './style.css';

function Calculator() {
  return (
    <div className="calculate__wrapper">
      <h2 className="centre">Lets do some Math</h2>
      <div className="calculator__box">
        <App />
      </div>
    </div>
  );
}

export default Calculator;
