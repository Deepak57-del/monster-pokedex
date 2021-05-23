import React from 'react';

import '../Search-box/search-box.style.css'

export const SearchBox = ( { placeholder,handlechange } )=>(
    <input type='search' className="search" placeholder={placeholder} onChange={handlechange}/>
)