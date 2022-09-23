import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Balance.css"

export default class Balance extends Component {
    constructor(props){
        super(props)
    }
render(){

  return (
    <div id = "balance">
        
        <Card style={{ width: '18rem' }} id = "balanceCard">
      <Card.Body>
        <h2>Total Balance</h2>
        <h3>$___.__ USD</h3>

        <Card.Text>
        <div id = "buttons">
            <button>Buy </button>
            <button>Sell</button>
        </div>

        <button>Go to Portfolio</button>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
   
  );
}
}
