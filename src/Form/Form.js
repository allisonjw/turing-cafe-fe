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
    render() {
        return (
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <button></button>
            </form>
        )
    }
}

export default Form;