import React from 'react';
import FullscreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

const FullScreen = props => (
    <div 
        className="FullScreen"
        onClick={props.handleFullScreenClick} >
        <FullscreenIcon 
            size={25}
            color="white"
        />
    </div>
)

export default FullScreen;