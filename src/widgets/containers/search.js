import React, { Component } from 'react';
import Search from '../components/search';

class SearchContaner extends Component {

    state = {
        value: 'Responsive Design'
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log('submit', event);
        console.log(this.input.value);
        
    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value.replace(' ', '-')
        })
    }

    render () {
        return (
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value} />
        )
    }
}

export default SearchContaner;