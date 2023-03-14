import React from 'react';
import './App.css';
import photo from './photo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>{'Hello.'}</div>
       <div className="App-name">{`I'm Sergei`}</div>
      </header>
      <div className="App-description">{`Professional programmer in cross-platform mobile development with more than 4 years' experience`}</div>
      <img className="App-photo" src={photo} alt="Photo" />
    </div>
  );
}

export default App;
