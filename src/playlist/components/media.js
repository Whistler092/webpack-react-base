import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {

   /*  handleClick = (event) => {
        this.setState({
            author: 'Leonidas Esteban'
        })
    } */

    render(){        
        return (
            <div className="Media"  onClick={this.props.handleOpenModal}>
                <div className="Media-cover"> 
                    <img className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={240} 
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
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;