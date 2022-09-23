import React from 'react'
import AddStock from '../components/DashboardComp/SearchStock'
import Balance from '../components/DashboardComp/Balance'
import NavBar from '../components/NavBar/NavBar'
import SearchStock from '../components/DashboardComp/SearchStock'
import WatchList from '../components/DashboardComp/WatchList'
import NewDashboard from '../components/newDashboard'

const Dashboard = () => {
  return (
    <div>

      {/* <NavBar/> */}
      <NewDashboard/>
      <Balance/>
      <SearchStock/>
      <WatchList/>
    </div>
  )
}

export default Dashboard