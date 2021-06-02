import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import '../App.css'
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    </React.Fragment>
  );
}

export default App;
