import React from 'react';

const SearchBox =({searchfield,searchChange})=>{
    return (
        <input type="search" placeholder="Search robot" className="input-box" onChange={searchChange}/>
    )
}

export default SearchBox;