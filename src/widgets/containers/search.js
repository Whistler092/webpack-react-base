import React, { Component } from 'react';

import { connect } from 'react-redux';

import Search from '../components/search';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

class SearchContaner extends Component {

    state = {
        value: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        /* console.log('submit', event);
        console.log(this.input.value); */
        this.props.actions.searchEntities(this.input.value)
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

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchContaner);