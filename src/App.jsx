import React from 'react'
import logo from './assets/logo.jpg'
import Card from 'react-bootstrap/Card'
import burger from './assets/burger.jpg'
import Button from 'react-bootstrap/Button'
import './App.css'

function App() {

  return (
    <>
     <img src={logo} alt="Logo Junk Food" />
     <h1>Junk Food</h1>
     <Card> 
      <Card.Img variant="top" src={burger} />
      <Card.Body>
      <Card.Title>Burger</Card.Title>
      <Card.Text>Rp. 35.999</Card.Text>
      <Button variant="primary">Order</Button>
      </Card.Body>
     </Card>
    </>
  )
  
}

export default App
