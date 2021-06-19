import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({trans}) {
    const {deleteTrans} =useContext(GlobalContext)
    const sign =trans.amount <0 ? "-" :"+"
    return (
        <div>

        <li key={trans.id} className={trans.amount <0 ? "minus" :"plus"}>
          {trans.text}
          <span>{sign}${Math.abs(trans.amount)}</span>
          <button onClick={()=> deleteTrans(trans.id)} className="delete-btn">x</button>
        </li>

        </div>
    )
}

export default Transaction
