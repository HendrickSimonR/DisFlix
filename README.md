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

# Features

1) On hovering a movie thumbnail, styling changes display functional buttons, as well as a preview of the movie.

2) Like and Dislike movies.

3) Play buttons render a full screen view of the chosen movie.

4) Watchlist: Add and remove movies from a Watchlist. Watchlist is updated in real-time on both the Home page and Watchlist page, and will be stored in the database.

5) Movie Modal: Clicking on the down arrow on the thumbnail opens a modal featuring more information about the movie (Cast, Blurb, Genres).

6) URLs sorting movies by brand (Disney, Pixar, Marvel, Star Wars, National Geographic), featuring styling as they appear on Disney Plus.

7) Search: search for movies based on title, genre, cast, keywords, and more.
 
8) Avatars: select your favorite Disney Plus character. If not there, shuffle using the button below the displayed avatars and see who else pops up!

9) Interactive styling provides an exciting experience for users, while the theme adds a touch of nostalgia

10) Users can access the live site on both Desktop and Mobile.

# Languages & Frameworks
### Rails
- The Rails back-end provides the structure of the data. Rails routes provide the pathway for which functions in the back-end are executed, and data is stored or changed.

### JBuilder
- JBuilder converts API calls to the Rails back-end into JSON. 

### PostgreSQL
- PostgreSQL is used to store, query, and filter data in the back-end.

### React.js
- The front-end utilizes React for functionality and user interactivity, allowing for real-time updates. This project utilizes a mix of hooks and classes, and classic JavaScript for certain functions.

### Redux
- Redux handles the application's state. Redux is utlized as the intermediary between the React front-end and Rails back-end to apply updates in both. For instance, User Auth is accomplished through the Redux cycle. 

### SCSS
- Syntactically Awesome Stylesheets allow for responsive styling in a user's screen size and specific user interactions.

### Amazon Web Services S3
- AWS S3 hosts video clips and images, populating the application with the data on render.

### HTML5
- Using the classic internet language allows for special features, such as using Google API Fonts, favicon, scrollbar styling, and utilizing the window for globally accessed variables.

### GitHub, Heroku
- GitHub stores and hosts the code, while Heroku compiles to allow the website to be accessible to any and all users.

### Babel, Webpack
- Both build tools are used with custom config files.


# Code

## Scroll Functionality

Using JavaScript, I developed the functionality of a row moving once an arrow is clicked. Once clicked, the arrow is removed, and the arrow on the opposite side of the row is revealed, allowing the row to scroll to the original position. The responsive styling is done with changing class names, resulting in different styling rules. React Refs are used in order to manipulate and update the proper row. Futhermore, the middle thumbnail changes styling rules as well, depending on which arrow is clicked.

### JS Function
```javascript
handleScroll = ( direction, brand, ref ) => {
  let mid = [
    document.getElementsByClassName(`thumbnail-container middle ${brand} swiped`)[0],
    document.getElementsByClassName(`thumbnail-container middle ${brand}`)[0]
  ]

  let leftArrow = [
    document.getElementsByClassName(`material-icons left-arrow ${brand}`)[0],
    document.getElementsByClassName(`material-icons left-arrow ${brand} hidden`)[0]
  ];

  let rightArrow = [
    document.getElementsByClassName(`material-icons right-arrow ${brand}`)[0],
    document.getElementsByClassName(`material-icons right-arrow ${brand} hidden`)[0]
  ];

  if (direction === 'left') {
    ref.current.style.transform = 'translateX(0px)';
    mid[0].classList.remove('swiped');
    leftArrow[0].classList.add('hidden');
    rightArrow[1].classList.remove('hidden');
  } else {
    ref.current.style.transform = 'translateX(-78.5%)';
    mid[1].classList.add('swiped');
    leftArrow[1].classList.remove('hidden');
    rightArrow[0].classList.add('hidden');
  }
}
```

The following code showcases how a row of movies and functional arrows are rendered on the React component. This snippet is taken from a loop, which is responsible for rendering different data for each row.

### React 
``` javascript
<div key={ `${header}-${i}` }>
  <h1 className="row-header">
    { header }
  </h1>
                    
  <div className="scroll-arrows">
    <span 
     className={ scrollLeft } 
     onClick={ () => this.handleScroll('left', currentInput, currentRef) }
    >
      arrow_back_ios
    </span>
    <span 
     className={ scrollRight }  
     onClick={ () => this.handleScroll('right', currentInput, currentRef) }
    >
      arrow_forward_ios
    </span>
  </div>
                    
  <ul className="movie-row" id={ id } ref={ currentRef }>
    { movies.map((movie) => (
       <ThumbnailContainer movie={ movie } />
    ))}
  </ul>
</div>

```

## Modal

Clicking the down arrow button on a thumbnail or clicking the About Me link on the dropdown menu will initiate the function below.
The function takes in an input and a callback function which closes the modal. The input is either one of two things:

#### - Movie ID 
The movie ID is taken as a string and converted to an integer. The integer is provided as a prop to the Movie Modal Container, which is used to find the matching data in the movie's slice of state, finally rendering the information onto the component.

#### - About
About is a string 'about', which simply renders the About Me component to the page.

#### Other Info
e.stopPropagation() prevents the modal from closing when a user interacts with the component.
closeModal applied to the parent container (onClick) allows the user to close the modal when they click outside of the child component.
Based on what the URL is during a User's experience, conditions will change the class name of the components, resulting in different styling.

``` javascript
const Modal = ({ input, closeModal }) => {
  if (!modal) return null;

  let about;
  let movieId;
  let modalComponent;
  let url = window.location.href;
  let modalName = 'modal-background';

  if (modal.includes('about')) {
    about = true;
    modalComponent = <AboutContainer />;
  } else {
    movieId = parseInt(modal);
    modalComponent = <MovieModalContainer movie={movieId} />
  }
  
  if (url.includes('watchlist')) {
    modalName += ' watchlist';
  } else if (url.includes('search')) {
    modalName += ' search';
  } else if (!url.includes('home')) {
    modalName += ' brand';
  }   

  return (
    <div onClick={ closeModal } className={ modalName } >
      <div 
        className={ about ? "modal-child about" : "modal-child" } 
        onClick={ e => e.stopPropagation() }
      >
        { modalComponent }
      </div>
    </div>
  );
}
```
