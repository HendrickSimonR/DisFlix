# Disney Cinema
 
Disney Cinema is a Netflix website clone utilizing Disney properties and specific UI eleements from Disney Plus. You can browse and watch Disney classics and other Disney-owned films all on this platform.


- Backend : Ruby on Rails
- Frontend : React-Redux
- Database : PostgreSQL
- Hosting : Heroku


# Features

## Movies

- Preview playback and more information on hover
- Interactive scrolling and watchlist


Using React, Javascript and CSS, a movie will expand and play a preview when moused over by the user. CSS elements make this all possible, while JavaScript handles the rendering of the videos. The homepage also allows a user to add movies to a watchlist, which updates in real time.

## JAVASCRIPT

`````


`````

## REACT
`````
        <div className="movie-index">
          {this.props.watchlist.includes('No watchlists!') && this.props.watchlist.length === 1 
        
          ? <div>
                <h1 className="row-header">Watchlist</h1>
                <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
                  <li className="thumbnail-container" onMouseOver={event => this.hoverPlay(event)} onMouseOut={event => event.target.load()}>
                    <img src={window.placeholder} className="thumbnail" id="placeholder" ></img>
                  </li>
                </ul>
            </div>
        
          
          : <div>
            <h1 className="row-header">Watchlist</h1>
            <span className="material-icons left-arrow" onClick={() => this.handleScroll('left', 'watchlist')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'watchlist')}>
              arrow_forward_ios
            </span>
            <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
              {this.watchlistMovies.map((movie) => (
                <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
              ))}
            </ul>
          </div> }

`````
