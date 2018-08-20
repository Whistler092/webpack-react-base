import React, { Component } from 'react';
import './video.css'

class Video extends Component {

    togglePlay(){
        if(this.props.pause){
            this.video.play()
        }else {
            this.video.pause()
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.pause != this.props.pause){
            this.togglePlay();
        }
        //pause
    }

    setRef = element => {
        this.video = element
    }

    render (){
        const {
            handleLoadedMetadata,
            handleTimeUpdate
        } = this.props;
        return (
            <div className="Video">
                <video 
                    ref={this.setRef}
                    autoPlay={this.props.autoplay}
                    src={this.props.src} 
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate} />
            </div>
        )
    }
}

export default Video;