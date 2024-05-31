import React from 'react'

const Favorites = ({favorites}) => {
  return (
    <div  className='myfavorites'>
      <h2>My Favorites</h2>
 
 <div className='favoriteimage'>
{favorites.map((favorite)=>(
<img key={favorite.imbdID} src={favorite.Poster}/>



)

)
}
    </div>
    </div>
  )
}

export default Favorites
