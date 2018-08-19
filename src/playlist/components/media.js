import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        //console.log(event);
        console.log(this.props.title);
    }

    render(){        
        return (
            <div className="Media"  onClick={this.handleClick}>
                <div className="Media-cover"> 
                    <img className="Media-image"
                        src={this.props.image}
                        alt=""
                        width={260} 
                        height={160}
                        />
                </div>
                <h3 className="Media-title" >{this.props.title}</h3>
                <p className="Media-autor">{this.props.author}</p>
            </div>
        )
    }
}
Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Media;