import React, { useState, useEffect } from 'react';

const WatchlistButton =  props => {
  const [ added, status ] = useState('add');
  let className;
  
  props.modalButton 
    ? className = "add-button modal"
    : className = "add-button";

  useEffect(() => {
    for (let i = 0; i < props.watchlist.length; i++) {
      let watchlistMovie = props.watchlist[i];

      if (watchlistMovie['movie_id'] === props.movieId) {
        status('done');
        break;
      } else {
        status('add');
      }
    }
  }, [ props.watchlist ]); 
  
  const editWatchlist = () => {
    if (added === 'add') {
      status('done');
      props.newAddition({ 
        movie_id: props.movieId, 
        user_id: props.userId 
      });
    } else {
      status('add');
      props.removeMovie({ 
        watchlist_id: props.watchlistId, 
        movie_id: props.movieId, 
        user_id: props.userId 
      });
    }
  }

  return (
    <div onClick={ () => editWatchlist() } className={ className } >
      <p className="material-icons-outlined">
        { added }
      </p>
    </div>
  )
}

export default WatchlistButton;