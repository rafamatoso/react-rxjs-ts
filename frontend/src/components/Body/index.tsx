import React, { useState } from 'react';
import './styles.css';

interface ListProps {
  items: string[];
}

export const Body: React.FC = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState<any>([]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setNames((n: string[]) => [name, ...n]);
    setName('');
    e.currentTarget.reset();
  };

  const handleInput = (e: any): void => {
    setName(e.target.value);
  };

  return (
    <div className="App-body">
      <h2>Digite um Nome</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" onChange={(e) => handleInput(e)} />
        <button type="submit" disabled={name === ''}>
          Adicionar
        </button>
      </form>
      <List items={names} />
    </div>
  );
};

const List: React.FC<ListProps> = ({ items }: ListProps) => {
  return (
    <ol>
      {items
        .map((item: string) => {
          return (
            <div>
              <li key={item}>{item}</li>
            </div>
          );
        })
        .reverse()}
    </ol>
  );
};
