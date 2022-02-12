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
      }
    })

    return(
      <div className="search-container">
        { this.moviesFound.length === 0 ?    

        <div className="nothing-container">
          <img src={window.surprised} className="mickey-surprised" />
          <h1>Try your search again!</h1>
        </div>

        : 

        <div>
          <h1 id="search-results">{this.props.search}</h1>
          <ul className="films-rows" style={{top: '10vw'}}>

            {this.moviesFound.map((movie) => (
              <ThumbnailContainer 
                movie={movie} 
                key={movie.id} 
                likes={this.props.likes} 
                dislikes={this.props.dislikes} 
                watchlist={this.props.watchlist} 
              />
            ))}

          </ul>
        </div>

        }
      </div>
    )
  }
}

export default Search;
