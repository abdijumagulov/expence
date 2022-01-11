import React from 'react';
import "./app.css";
import Card from './components/UI/card';
import Expence from './components/Expenses/Expence';

const App = () => {
  const expense = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 1.5,
        date: new Date(2021,2,28)
    },
    {
      id: 'e2',
      title: 'Tesla Car',
      amount: 200.000,
      date: new Date(2021,2,28),
    },
    {
      id: 'e3',
      title: 'IPhone 13 pro',
      amount: 1200,
      date: new Date(2021,2,28)
    },
    {
        id: 'e4',
        title: 'Gold Toilet Paper',
        amount: 1.5,
        date: new Date(2021,2,28)
      }
    
]
  return (
    <Card className='app'>
      <Expence data={expense}/>
    </Card>
  );
};

export default App;


