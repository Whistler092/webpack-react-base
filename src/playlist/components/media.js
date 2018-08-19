import React, { Component } from 'react';
import './media.css';

class Media extends Component{
    render(){
       /* const styles ={
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        <div style={styles.container} />*/
        return (
            <div className="Media" >
                <div className="Media-cover"> 
                    <img className="Media-image"
                        src="./images/covers/bitcoin.jpg"
                        alt=""
                        width={260} 
                        height={160}
                        />
                </div>
                <h3 className="Media-title" >¿Por qué aprender React?</h3>
                <p className="Media-autor">Por Ramiro Bedoya</p>
            </div>
        )
    }
}

export default Media;