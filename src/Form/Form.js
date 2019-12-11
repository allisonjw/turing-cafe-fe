import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitReservation = (e) => {
        const newReservation = {
            id: Date.now(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            number: this.state.number
        }
        this.props.addReservation(newReservation)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({name: '', date: '', time: '', number: ''})
    }

    render() {
        return (
            <form>
                <input
                  className="form_input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                ></input>
                <input
                  className="form_input"
                  type="text"
                  name="date"
                  value={this.state.date}
                  placeholder="Date mm/dd"
                  onChange={e => this.handleChange(e)}
                ></input>
                <input
                  className="form_input"
                  type="text"
                  name="time"
                  value={this.state.time}
                  placeholder="Time"
                  onChange={e => this.handleChange(e)}
                ></input>
                <input
                  className="form_input"
                  type="text"
                  name="number"
                  placeholder="Number"
                  value={this.state.number}
                  onChange={e => this.handleChange(e)}
                ></input>
                <button 
                  className="form_btn"
                  onClick={e => this.submitReservation(e)}
                  >Make Reservation
                  </button>
            </form>
        )
    }
}

export default Form;