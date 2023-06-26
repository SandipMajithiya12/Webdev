import React,{useContext} from 'react'
import { GlobalContext } from '../context/Globalstate';

const Transection = ({transactions}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transactions.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
            {transactions.text} <span>{sign}{Math.abs(transactions.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(transactions.id)}>x</button>
        </li>
    </div>
  )
}

export default Transection
 