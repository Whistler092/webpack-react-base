import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css'

class Playlist extends Component {
    render () {
        const categories = this.props.data.categories;
        return (
            <div>
            {
                categories.map((category) => {
                    return <div className="Playlist" key={category.id}>
                        <h2>{category.title}</h2>
                        <h3>{category.description}</h3>
                        {
                            category.playlist.map((item) => {
                                return <Media key={item.id}
                                                {...item} />
                            })
                        }
                    </div>
                })
            }
            </div>
        )
    }
}

export default Playlist;