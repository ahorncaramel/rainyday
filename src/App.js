import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  let message;
  if (clickCount === 1) {
    message = "Hello Lukas";
  }
  else if (clickCount === 2) {
    message = "I will become your little website motivation";
  } 
  else if (clickCount === 3) {
    message = "You clicked me 3 times now";
  }
  else if (clickCount === 4) {
    message = "Wondering how long this will go?";
  }
  else if (clickCount === 5) {
    message = "Maybe the next click will do something else...";
  }
  else if (clickCount === 6) {
    message = "No, not yet. Bedtime now :)";
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Look what I can do!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Even a link waohw
        </a>
        <button className= "customButton" onClick={handleClick}>CLICK ME!</button>
        {clickCount > 0 && <p className="message">{message}</p>}
      </header>
    </div>
  );
}

export default App;
