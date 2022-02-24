import React, { useState, useEffect } from 'react';

const WatchlistButton = props => {
  const [ added, status ] = useState('add');
  
  useEffect(() => {
    status('add')
    if (props.watchlistId) status('done');
  }); 
  
  let className = "add-button";
  props.modalButton ? className += " modal" : null;
  
  const editWatchlist = () => {
    if (added === 'add') {
      props.newAddition({ 
        movie_id: props.movieId, 
        user_id: props.userId 
      });
    } else {
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