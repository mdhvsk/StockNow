import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Balance.css"


const WatchList = () => {


  return (
    <div id = "balance">
        
    <Card style={{ width: '18rem' }} id = "balanceCard">
  <Card.Body>
    <h2>WatchList</h2>

    <div >
        <h4>Stock 1: Info</h4>
        <button>Go</button>
    </div>
    <div >
        <h4>Stock 2: Info</h4>
        <button>Go</button>
    </div>
    <div >
        <h4>Stock 3: Info</h4>
        <button>Go</button>
    </div>
    <div >
        <h4>Stock 4: Info</h4>
        <button>Go</button>
    </div>

    
  </Card.Body>
</Card>

</div>
  )
}

export default WatchList