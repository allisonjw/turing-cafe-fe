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
    render() {
        return (
            <form>
                <input
                  className="form_input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                ></input>
                <input
                  className="form_input"
                  type="text"
                  name="date"
                  value={this.state.date}
                  onChange={e => this.handleChange(e)}
                ></input>
                <input
                  className="form_input"
                  type="text"
                  name="time"
                  value={this.state.time}
                  onChange={e => this.handleChange(e)}
                ></input>
                <input
                  className="form_input"
                  type="text"
                  name="number"
                  value={this.state.number}
                  onChange={e => this.handleChange(e)}
                ></input>
                <button></button>
            </form>
        )
    }
}

export default Form;