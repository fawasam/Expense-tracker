import React from 'react';
import "./app.css"
import Header from "./components/Header.jsx"
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTranscation from './components/AddTranscation';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
       <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTranscation/>
       </div>
    </GlobalProvider>
  );
}

export default App;
