import React from 'react';
import logo from './assets/logo.svg';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        <h1>
          React + TypeScript + RxJS
        </h1>
        <img src={logo} alt="App logo"></img>
      </header>
      <body className="App-body">
        <p>Aqui ficará o conteúdo</p>
      </body>
    </div>
  );
};

export default App;
