import React, { Fragment } from 'react';
import { Header } from './budget/Header'
import { Balance } from './budget/Balance'
import { Expenses } from './budget/Expenses'
import { ExpensesList } from './budget/ExpensesList'
import { AddExpense } from './budget/AddExpense'

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <Fragment>
      <GlobalProvider>  
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <ExpensesList />
        <AddExpense />
      </div>
      </GlobalProvider>
    </Fragment>
  
  );
}

export default App;
