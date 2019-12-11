import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation } from '../apiCalls';
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

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
    postReservation(newReservation)
    .then(res => res.json())
    .then(data => this.setState({reservations: data}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Container reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
