import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    function searchMovies(search, movie) {
      let searchStr = search.toLowerCase().replaceAll(',', '').replaceAll('-', ' ').replaceAll("'", '').replaceAll(':', '').replaceAll('.', '');
      let title = movie.title.toLowerCase().replaceAll('’', '').replaceAll(':', '').replaceAll('.', '').replaceAll(',', '').replaceAll('-', ' ').concat(' ');
      let description = movie.description.toLowerCase().replaceAll(';', '').replaceAll('’', '').replaceAll(':', '').replaceAll('.', '').replaceAll(',', '').replaceAll('-', ' ').concat(' ');
      let rating = movie.rating.toLowerCase().replaceAll('-', ' ').concat(' ');
      let tags = movie.tags.toLowerCase().replaceAll(',', '').replaceAll('-', ' ').concat(' ');
      let topic = movie.topic.toLowerCase().replaceAll('-', ' ').concat(' ');
      let cast = movie.cast.toLowerCase().replaceAll(',', '').replaceAll('-', ' ').replaceAll('’', '').concat(' ');
      let keywords = movie.keywords.toLowerCase().replaceAll(',', '').replaceAll('-', ' ').concat(' ');
      let movieInfo = title.concat(description).concat(rating).concat(tags).concat(topic).concat(cast).concat(keywords).concat(movie.year);

      if (searchStr.includes(' ')) {
        let searchArr = searchStr.split(' ');
        let count = 0;

        for (let i = 0; i < searchArr.length; i++) {
          let word = searchArr[i];
          if (movieInfo.includes(word)) count++;
          if (count === searchArr.length) return true;
        }
      } else if (movieInfo.includes(searchStr)) {
        return true;
      } else {
        return false;
      }
    }

    this.moviesFound = [];
    this.props.movies.forEach(movie => {
      if(searchMovies(this.props.search, movie) === true) {
        this.moviesFound.push(movie);
        // console.log('MOVIE SEARCHED', this.moviesFound)
      }
    })

    return(
      <div className="search-container">
        {this.moviesFound.length === 0 ?
          <div className="nothing-container">
            <img src={window.surprised} className="mickey-surprised" />
            <h1>Try your search again!</h1>
          </div>

        : 
        <div>
          <h1 id="search-results">{this.props.search}</h1>
          <ul className="films-rows" style={{top: '22vh'}}>
            {this.moviesFound.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
              ))}
          </ul>
        </div>
        }
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Search;

// let movie = {
//   brand_id: 3,
//   cast: "Chris Pratt, Zoe Saldana, Dave Bautista, Bradley Cooper",
//   description: "Brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by a powerful villain with ambitions that threaten the entire universe. To evade capture, Quill joins with a quartet of disparate misfits: Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and revenge-driven Drax the Destroyer.",
//   id: 27,
//   keywords: "Marvel, Comics, Saga, Superhero, James Gunn, Super-Hero, Superheroes, Star-Lord, StarLord, Gamora, Drax, Groot, Rocket, Raccoon, Space, Adventure, Journey, Thanos, Power, Infinity Stones, Mountain High Enough, Ooh Child, I Want You Back",
//   rating: "PG-13",
//   runtime: "2h 2m",
//   tags: "Sci-Fi, Comedy, Adventure",
// title: "Guardians of the Galaxy",
// topic: "Exciting",
// year: 2014
// }