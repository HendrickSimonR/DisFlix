import React from 'react';
import Thumbnail from '../home/thumbnail';

class Brand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.disney = [];
    this.pixar = [];
    this.marvel = [];
    this.starWars = [];
    this.natGeo = []; 
    
    let allMovies = {};
    let { movies } = this.props; //equivalent to this.props.movies
    let moviesArr = Object.values(movies);

    if (moviesArr.length === 0) {
      return null;
    } else {
      moviesArr.forEach(movie => {
        if (movie['brand_id'] === 1) {
          this.disney.push(movie);
        } else if (movie['brand_id'] === 2) {
          this.pixar.push(movie);
        } else if (movie['brand_id'] === 3) {
          this.marvel.push(movie);
        } else if (movie['brand_id'] === 4 ) {
          this.starWars.push(movie);
        } else {
          this.natGeo.push(movie);
        }
      })

      allMovies['disney'] = this.disney;
      allMovies['pixar'] = this.pixar;
      allMovies['marvel'] = this.marvel;
      allMovies['starWars'] = this.starWars;
      allMovies['natGeo'] = this.natGeo;
    }

    

    let brand;

    if (window.location.href.includes('disney')) {
      brand = allMovies['disney'];
    } else if (window.location.href.includes('pixar')) {
      brand = allMovies['pixar'];
    } else if (window.location.href.includes('marvel')) {
      brand = allMovies['marvel'];
    } else if (window.location.href.includes('starwars')) {
      brand = allMovies['starWars'];
    } else {
      brand = allMovies['natGeo'];
    } 
    
    
    console.log('DISNEY', this.state, this.props)
    console.log('MOVIES', this.disney)
    console.log('WINDOW', window.location.href)
    console.log('BRAND', brand)
    console.log('ALL', allMovies)



    return (
      <div className="brand-page">
        <ul className="brand-movies">
          {brand.map((movie) => (
            <Thumbnail user={user} key={movie.id} movie={movie}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default Brand;