import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard'
import Settings from './views/Settings'
import OneStock from './views/OneStock'
import Portfolio from './views/Portfolio'
import NewStock from './views/NewStock'

import {Routes, Route, Navigate} from 'react-router-dom'
import { Component } from 'react';

import NewDashboard from './components/newDashboard';
import Register from './components/register'
import Login from './components/login'



function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
     <Routes>
     {user && <Route path="/" exact element={<NewDashboard />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />


        <Route element = {<Dashboard/>} path = "/dashboard"/>
        <Route element = {<Settings/>} path = "/settings"/>
        <Route element = {<OneStock/>} path = "/dashboard/stock/:stockSymbol"/>
        <Route element = {<Portfolio/>} path = "/dashboard/stock/portfolio"/>
        <Route element = {<NewStock/>} path = "/dashboard/stock/:stockSymbol/new"/>
      </Routes>
    </div> 
  );
}

export default App;


