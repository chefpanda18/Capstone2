import React, { Fragment } from 'react';
import { Header } from './budget/Header'
import { Balance } from './budget/Balance'
import { Transactions } from './budget/Transactions'
import { TransactionsList } from './budget/TransactionsList'
import { AddTransaction } from './budget/AddTransaction'

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    // <Fragment>
      <GlobalProvider>  
        <Header />
        <div className="container">
          <Balance />
          <Transactions />
          <TransactionsList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    // </Fragment>
  
  );
}

export default App;
