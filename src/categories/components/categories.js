import React from 'react';
import Category from './category';
import './categories.css';
import SearchContaner from '../../widgets/containers/search';


function Categories(props){
    return (
        <div className="Categories">
        <SearchContaner />
        {
            props.categories.map((item) => {
                return <Category key={item.id} {...item} 
                                handleOpenModal={props.handleOpenModal} />
            })
        }
        </div>
    )
}

export default Categories;