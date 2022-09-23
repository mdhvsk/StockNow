import {useParams} from 'react-router-dom'
import axios from 'axios'
import React, {useState, Component, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import './OneStock.css'



const StockInfo = (props) => {
    const stockLetters = props.stockSymbol
    const navigate = useNavigate()
    const [price, setPrice] = useState("")
    const [open, setOpen] = useState("")
    const [high, setHigh] = useState("")
    const [low, setLow] = useState("")
    const [volume, setVolume] = useState("")
    const [previous, setPrevious] = useState("")
    const [change, setChange] = useState("")

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/stocks/get/${stockLetters}`).then(response => {
            setPrice(response["data"]["Global Quote"]["05. price"])
            setOpen(response["data"]["Global Quote"]["02. open"])
            setHigh(response["data"]["Global Quote"]["03. high"])
            setLow(response["data"]["Global Quote"]["04. low"])
            setVolume(response["data"]["Global Quote"]["06. volume"])
            setPrevious(response["data"]["Global Quote"]["08. previous close"])
            setChange(response["data"]["Global Quote"]["10. change percent"])
        });
    })

    const buyRedirect = () => {
        navigate(`/dashboard/stock/${stockLetters}/new`, {state: {stockPrice: price}})
    }
  return (
    <div>
        <div >
        <Card style={{ width: '36rem' }} id = "infoCard">
      <Card.Body>
        <h2>Stock: {stockLetters}</h2>
        <h3>$Price: {price}</h3>
        <table id = "info">
            <tr>
                <td className='name'>Previous Close</td>
                <td className='value'>${previous}</td>
            </tr>
            <tr>
                <td className='name'>Open</td>
                <td className='value'>${open}</td>
            </tr>
            <tr>
                <td className='name'>High</td>
                <td className='value'>${high}</td>
            </tr>
            <tr>
                <td className='name'>Low</td>
                <td className='value'>${low}</td>
            </tr>
            <tr>
                <td className='name'>Volume </td>
                <td className='value'>{volume}</td>
            </tr>
            <tr>
                <td className='name'>Change </td>
                <td className='value'>{change}</td>

            </tr>
            
        </table>
       
        </Card.Body>
        <button>Add to Watchlist</button>
        <button onClick = {buyRedirect}>Buy</button>
    </Card>
    
    </div>
    </div>
  )
}

export default StockInfo

