import React from 'react';
import { logos } from '../../assets';
import './styles.css';

export const Header: React.FC = () => {
  return (
    <header className="header-container">
      <h1>
        React <img src={logos.react} alt="App logo" /> + TypeScript{' '}
        <img src={logos.typescript} alt="App logo" /> + RxJS{' '}
        <img src={logos.rxjs} alt="App logo" />
      </h1>
    </header>
  );
};
