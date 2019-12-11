import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';
import Form from '../Form/Form';
import Container from '../Container/Container';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(data => this.setState({reservations: data}))
    .then(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Container />
        </div>
      </div>
    )
  }
}

export default App;
