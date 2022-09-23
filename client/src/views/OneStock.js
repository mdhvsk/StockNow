import React from 'react'
import StockInfo from '../components/OneStock/StockInfo'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import NewDashboard from '../components/newDashboard';
const OneStock = () => {
  let {stockSymbol} = useParams();
  return (
    <div>
      <NewDashboard/>
      <StockInfo stockSymbol= {stockSymbol}/>
    </div>
  )
}

export default OneStock