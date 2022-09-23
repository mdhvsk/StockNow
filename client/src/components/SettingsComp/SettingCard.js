import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./SettingCard.css"

export default class SettingsCard extends Component {
    constructor(props){
        super(props)
    }
render(){

  return (
    <div id = "settings">
        
        <Card style={{ width: '18rem' }} id = "settingCard">
      <Card.Body>
        <h2>Settings:</h2>
        <Card.Text>
        <h3>Balance: </h3>
        <div id = "buttons">
            <button>Withdraw</button>
            <button>Deposit</button>
        </div>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
   
  );
}
}

