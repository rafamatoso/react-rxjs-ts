import React from 'react';
import { Header } from './components/Header';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <body className="App-body">
        <h2>Aqui ficará o conteúdo</h2>
      </body>
    </div>
  );
};

export default App;
