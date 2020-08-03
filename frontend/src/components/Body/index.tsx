import React, { useState } from 'react';
import './styles.css';

interface ListProps {
  items: string[];
}

export const Body: React.FC = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState<string[]>([]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setNames((n: string[]) => [name, ...n]);
    setName('');
    e.currentTarget.reset();
  };

  const handleInput = (e: any): void => {
    setName(e.target.value);
  };

  const handleRemoveName = (): void => {
    const auxNames = [...names];
    auxNames.shift();
    setNames(() => [...auxNames]);
  };

  return (
    <div className="App-body">
      <h2>Digite um Nome</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" onChange={(e) => handleInput(e)} />
        <button className="adicionar" type="submit" disabled={name === ''}>
          Adicionar
        </button>
        <button
          className="remover"
          type="button"
          onClick={() => handleRemoveName()}
          disabled={names.length === 0}
        >
          Remover
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
