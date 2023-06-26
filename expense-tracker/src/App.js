import React from 'react';
import Header from './componets/Header';
import './App.css';
import Balance from './componets/Balance';
import IncomeExpense from './componets/IncomeExpense';
import TransectionList from './componets/TransectionList';
import AddTranjection from './componets/AddTranjection';
import { GlobalProvider } from './context/Globalstate';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransectionList />
        <AddTranjection />
      </div>
     
      </GlobalProvider>
  );
}

export default App;
