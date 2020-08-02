import React, { useState } from 'react';
import './styles.css';

interface ListProps {
  items: string[];
}

const nameList = ['Rafael', 'Tallyta'];

export const Body: React.FC = () => {
  const [names, setNames] = useState(nameList);

  return (
    <body className="App-body">
      <List items={names} />
    </body>
  );
};

const List: React.FC<ListProps> = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
