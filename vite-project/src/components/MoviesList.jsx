import React from 'react';
import { useState } from 'react';
import Favorites from './Favorites';
const MoviesList = ({movie}) => {
  const [favorites,setFavorites]=useState([]);
  function addFavorites(movieItem){
    setFavorites([...favorites,movieItem]);
  console.log('favorites are',favorites);
  }
  console.log(movie);
  return (
    <>
   {movie && movie.map((movieItem,index)=>(

<div key={index} className='movieimage'> 
<img src={movieItem.Poster}  alt='MoviePhoto'/>
  <div className='favorites'>
  <i className="fa-regular fa-heart" onClick={()=>addFavorites(movieItem)}></i>

  </div>
    </div>

   ))

   }   
<Favorites favorites={favorites} />
    </>
  );
};

export default MoviesList;
