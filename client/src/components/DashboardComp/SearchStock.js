import React, {useState, Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";

const SearchStock = () => {
  const [stockSymbol, setStockSymbol] = useState("")
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault()
    navigate(`/dashboard/stock/${stockSymbol}`)
  }

  return (
    <div>
      <div id = "balance">
        <Card style={{ width: '18rem' }} id = "searchCard">
      <Card.Body>
        <h2>Search Stock</h2>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className='mb-3' >
            <Form.Label>Stock Symbol</Form.Label>
            <Form.Control type = "stockSymbol" placeholder = "eg. AAPL" onChange={(e => {
              console.log(e.target.value)
              setStockSymbol(e.target.value)})}/>
          </Form.Group>
          <input type = "submit" value = "Search"/>

        </Form>
        Search
        </Card.Body>
    </Card>
    
    </div>
   
      
    </div>
  )
}

export default SearchStock