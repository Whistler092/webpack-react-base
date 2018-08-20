import React from 'react';
import './search.css';
/* function Search (props ) {
    return 
} */

const Search = (prop) => (
    <form className="Search" onSubmit={prop.handleSubmit}>
        <input 
            ref={prop.setRef}
            className="Search-input" 
            type="text" 
            placeholder="Busca tu video favorito" 
            onChange={prop.handleChange}
            value={prop.value}
            />

    </form>
)

export default Search;