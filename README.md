<p align="center">
 <img src="https://github.com/HendrickSimonR/Disney-Cinema/blob/main/app/assets/images/logo.png?raw=true" width="300">
</p>

<h1 align="center">
 https://disney-cinema.herokuapp.com
</h1>

<p align="center">
 <img src="https://github.com/HendrickSimonR/Disney-Cinema/blob/main/app/assets/images/screen_capture.gif?raw=true" />
</p>
 
### Disney Cinema is a "hybrid-clone", combining the UX/UI of Netflix and Disney Plus. With this app, user's can view classic Disney (and Disney-owned properties) scenes all in one place! 

Disclaimer: I do not own any rights to these characters, images, or video clips, and this website is not-for-profit!

## Languages & Frameworks
- Back-End: Ruby on Rails
- Front-End: React-Redux
- Database: PostgreSQL
- Data Transfer: Amazon Web Services S3
- Styling: SCSS
- Babel, Webpack, GitHub, HTML5

# Features

1) Preview playback and more information on hovering the movie's thumbnail.

2) Like and Dislike movies.

3) Watchlist: Add and remove movies from a watchlist. Watchlist is updated in real-time on both the Home page and Watchlist page.

4) Movie Modal: Clicking on the down arrow on the thumbnail opens a modal featuring more information about the movie (Cast, Blurb, Genres).

5) URLs sorting movies by brand (Disney, Pixar, Marvel, Star Wars, National Geographic), featuring styling as they appear on Disney Plus.

6) Search: search for movies based on title, genre, cast, keywords, and more.
 
7) Avatars: select your favorite Disney Plus character. If not there, shuffle using the button below the displayed avatars and see who else pops up!

# Code

## Scroll Functionality

Using JavaScript, I developed the functionality of a row moving once an arrow is clicked. Once clicked, the arrow is removed, and the arrow on the opposite side of the row is revealed, allowing the row to scroll back. The following snippet is an abridged version, showcasing the effects caused by clicking the left arrow on the Disney row of movies.

### JS Function
```javascript
handleScroll = (direction, brand) => {
    if (direction === 'left') {
      if (brand === 'disney') {
        this.disney.current.style.transform = 'translateX(0px)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle disney swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow disney");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow disney hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');
      }
    }
```

### React 
``` javascript
<div className="scroll-arrows">
  <span 
   className="material-icons left-arrow disney hidden" 
   onClick={() => this.handleScroll('left', 'disney')} 
  >
   arrow_back_ios
  </span>
  
  <span 
   className="material-icons right-arrow disney"  
   onClick={() => this.handleScroll('right', 'disney')}
  >
   arrow_forward_ios
  </span>
</div>
```


Using React, Javascript and SCSS, a movie will expand and play a preview when moused over by the user. CSS rules make this all possible, while JavaScript handles the rendering of the videos. The homepage also allows a user to add movies to a watchlist, which updates in real time.

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
