import React from 'react';
import Media from './media.js';
import './playlist.css'
import Play from '../../icons/components/play';

function Playlist (props) {
    const categories = props.data.categories;
    return (
        <div>
            <Play size={100} color="red"></Play>
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

export default Playlist;