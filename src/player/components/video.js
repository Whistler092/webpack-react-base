import React, { Component } from 'react';
import './video.css'

class Video extends Component {
    render (){
        return (
            <div className="Video">
                <video 
                    controls
                    autoPlay={this.props.autoplay}
                    src={this.props.src} />
            </div>
        )
    }
}

export default Video;