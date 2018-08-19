import React, { Component } from 'react';
import './media.css';

class Media extends Component{
    render(){
        
        return (
            <div className="Media" >
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

export default Media;