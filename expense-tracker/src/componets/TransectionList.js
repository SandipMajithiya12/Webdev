import React,{useContext} from 'react'
import Transection from './Transection';
import { GlobalContext } from '../context/Globalstate'

const TransectionList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transactions  =>(<Transection  key={transactions.id} transactions={transactions}/>))}
      </ul>
    </div>
  )
}

export default TransectionList
