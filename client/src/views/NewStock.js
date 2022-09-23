import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import NewDashboard from '../components/newDashboard';
import NewStockCard from '../components/NewStockComp/NewStockCard';

export const NewStock = () => {
  let {stockSymbol} = useParams();

  return (
    <div>
      <NewDashboard/>
      <NewStockCard stockSymbol = {stockSymbol}/>
    </div>
  )
}

export default NewStock