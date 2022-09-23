import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import "./NewStockCard.css"
import {useLocation, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
// export default class NewStockCard extends Component {
//     constructor(props){
//         super();
//         this.state = {stockPrice : ""};
//         this.stockLetters = props.stockSymbol
//         this.location = useLocation()
//     }
    // componentDidMount(){
    //     axios.get(`http://localhost:8000/api/stocks/get/${this.stockLetters}`).then(response => {
    //         this.setState({
    //             stockPrice: response["data"]["Global Quote"]["05. price"],

    //         })
    //     });
    // };

//     render (){
//         return (
//             <div className = "NewStock">
//                 <form>
//                 <h3>Stock: {this.state.stockS}</h3>
//                 <h4>User Balance: </h4>
//                 <h4>Current Price: {this.state.stockPrice}</h4>
//                     <p>
//                         <label>Quanity: </label>
//                         <input type = "number" name = "quantity"/>
//                     </p>
//                 <input type = "submit" value = "Submit"/>
//                 <button>Cancel</button>
//                 </form>
               
//             </div>
//           )
//     }
 
// }




const NewStockCard = (props) => {
  const stockSymbol = props.stockSymbol
  const location = useLocation();
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState(0)

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/stocks/get/${stockSymbol}`).then(response => {
        setPrice(response["data"]["Global Quote"]["05. price"])
    
    });
})

  return (

    <div>
       <Card style={{ width: '36rem' }} id = "infoCard">
      <Card.Body>
        <h2>Stock: {stockSymbol}</h2>
        <h3>User Balance: </h3>
        <h3>$Price: {price}</h3>
        <Form>
          <Form.Group classname = 'mb-3'>
            <Form.Label>Quantity</Form.Label>
          <Form.Control type = "stockSymbol" typeof='number' onChange={(e => {
              console.log(e.target.value)
              setQuantity(e.target.value)})}/>
          </Form.Group>

        </Form>
       
        </Card.Body>
        <button>Add to Watchlist</button>
        <button>Buy</button>
    </Card>
    </div>
  )
}

export default NewStockCard