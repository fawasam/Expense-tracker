import React, { useContext } from 'react'
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {

  const {transaction} =useContext(GlobalContext)
  //console.log(transaction);
 
    return (
      <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(trans =>(
          <Transaction key={trans.id} trans={trans} />
        ))}
       </ul> 
      </>
    )
}

export default TransactionList
