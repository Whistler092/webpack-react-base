import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../components/media';
import { openModal } from '../../actions';

class MediaContainer extends Component{
    openModal = (id) => {
        this.props.dispatch(openModal(id))
    };

    render(){
        return <Media 
                openModal={this.openModal}
                {...this.props.data.toJS()}></Media>
    }
}

function mapStateToProps(state, props){
        
    return {
        data: state.get('data').get('entities').get('medias').get(props.id)
    }
}

export default connect(mapStateToProps)(MediaContainer)