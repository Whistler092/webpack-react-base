import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../components/media';

class MediaContainer extends Component{

    render(){
        return <Media {...this.props.data}></Media>
    }
}

function mapStateToProps(state, props){
        
    return {
        data: state.data.entities.medias[props.id]
    }
}

export default connect(mapStateToProps)(MediaContainer)