import React from 'react'

const SearchBar = ({handleChange,searchMovie}) => {
  return (
    <div>
    <input   placeholder='Enter A movie Name' onChange={handleChange} ></input>  
    <button onClick={searchMovie}>Search</button>
    </div>
  )
}

export default SearchBar;
