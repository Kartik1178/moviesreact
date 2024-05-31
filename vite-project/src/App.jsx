import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import Favorites from './components/Favorites';
import React from 'react';
import './App.css'; 
import MoviesList from './components/MoviesList';
import SearchBar from './components/SearchBar';
import HeadingList from './components/HeadingList';
function App() {
  const [searchvalue,setValue]=useState('');
    const [movie, setMovie] = useState([]);
const getMovieRequest= async()=>{
const url=`http://www.omdbapi.com/?s=${searchvalue}&apikey=d916d12`
    const response=await fetch(url);
const responseJson=await response.json(); 

console.log(responseJson);
setMovie(responseJson.Search);
}; 
useEffect((searchvalue)=>{
if(searchvalue!==''){
    getMovieRequest(); } 
},[searchvalue]);
let searchedItem='';
function handleChange(e){
 searchedItem=e.target.value; 
}
function searchMovie(){
    setValue(searchedItem);
}

  return (
    <>
<div className='toppart'>
<div className='moviesHeading'>
    <HeadingList heading="Movies"/>
</div>
<div> 
    <SearchBar 
    searchvalue={searchvalue} 
    handleChange={handleChange} 
    searchMovie={searchMovie}
    />
</div>
</div >

<div className='movierow'>
<MoviesList movie={movie} />

</div>

    </>
  )
}

export default App
