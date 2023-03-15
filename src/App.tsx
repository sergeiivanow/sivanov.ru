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
      <a href="https://www.dropbox.com/s/x786wagua9eb0ue/s.ivanov_rn_dev_resume_ru.pdf?dl=1" className="App-link">{'Get my resume (RU)'}</a>
      <a href="mailto:to@sivanow.ru" className="App-link">{'Get in touch'}</a>
      <a href="https://t.me/sergeiiwanov" target="_blank" className="App-link" rel="noreferrer">{'Telegram'}</a>
      <a href="https://github.com/sergeiivanow" target="_blank" className="App-link" rel="noreferrer">{'GitHub'}</a>
    </div>
  );
}

export default App;
