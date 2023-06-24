import React from 'react';
import Header from './componets/Header';
import './App.css';
import Balance from './componets/Balance';
import IncomeExpense from './componets/IncomeExpense';
import TransectionList from './componets/TransectionList';
import AddTranjection from './componets/AddTranjection';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransectionList />
        <AddTranjection />
      </div>
     
    </div>
  );
}

export default App;
