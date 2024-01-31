import React, {useState} from 'react'
import logo from '../assets/logo.jpg'
import Card from 'react-bootstrap/Card'
import burger from '../assets/burger.jpg'
import Button from 'react-bootstrap/Button'

function Home() {

    const [products, setProducts] = useState(0);

    function increasesOrderCount(){
        setProducts(products + 1)
    }

    function decreaseOrderCount(){
        if (products > 0) {
            setProducts(products - 1)
        }
    }

  return (
    <>
    <div className="floating">
    <img className="logo" src={logo} alt="Logo Junk Food" />
    </div>
    
     <h1 className='txt-logo'>Junk Food</h1>
     <Card.Body>
     <Card className='card-product'> 
      <Card.Img className='img-product' variant="top" src={burger} />
     
      <Card.Title>Burger</Card.Title>
      <Card.Text>Rp. 35.999</Card.Text>
      <div className="count-btn">
        <Button onClick={decreaseOrderCount}>-</Button>
        <span>{products}</span>
        <Button onClick={increasesOrderCount}>+</Button>
      </div>
      <br />
      <Button variant="primary">Order</Button>
     
     </Card>
     </Card.Body>
    </>
  )
}

export default Home
