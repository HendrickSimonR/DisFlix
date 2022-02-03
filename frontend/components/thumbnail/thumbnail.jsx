import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistButtonContainer from './watchlist_button_container';
import LikeButtonsContainer from './like_buttons_container';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      mute: 'volume_up', 
      moviePlay: false,
      fullScreen: false 
    };

    this.uniqueId;
    this.showMovie = this.showMovie.bind(this);
    this.hoverVideo = this.hoverVideo.bind(this);
    this.exitVideo = this.exitVideo.bind(this);
    this.displayPoster = this.displayPoster.bind(this);
    this.watchMovie = this.watchMovie.bind(this);
  }

  watchMovie() {
    window.moviePlay = true;
    window.movieShow = this.props.movie.id;
    this.props.history.push('/movie');
  };

  handleMute(id){
    if(this.state.mute === 'volume_up'){
      this.setState({mute: 'volume_off'});
      let vid = document.getElementById(id);
      // console.log('id', id)
      if (vid) vid.muted = true;    
    } else {
      this.setState({mute: 'volume_up'});
      let vid = document.getElementById(id);
      if (vid) vid.muted = false;
    }
  }

  replayFeatured(posterId, movieId) {
    this.setState({ moviePlay: !this.state.moviePlay });
    let movie = document.getElementById(movieId);
    let poster = document.getElementById(posterId);
    poster.style.display = 'none';
    movie.style.display = 'inline-block';
    movie.play();
  }

  componentDidMount() {
    // console.log('THUMB PROPS', this.props)
  }

  displayPoster(posterId, movieId) {
    let movie = document.getElementById(movieId);
    let poster = document.getElementById(posterId);
    movie.style.display = 'none';
    poster.style.display = 'inline-block';
    this.setState({ moviePlay: !this.state.moviePlay });
  }

  hoverVideo(id) {
    // this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year)
    this.setState({ moviePlay: !this.state.moviePlay });
    let thumbMovie = document.getElementById(id);
    if (window.location.href.includes('home')) {
      // let vid = document.querySelector(".brand-container-video.featured");
      // vid.muted = true;
      // vid.pause();
      this.stopFeatured();
    }

    let volume = document.getElementById(id + 'volume');
    volume.style.display = 'inline-block';
    thumbMovie.play();
    // console.log('enter', indexMovie, this.state);
  }

  exitVideo(id, posterId) {
    // this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year)
    this.setState({ moviePlay: !this.state.moviePlay });
    let volume = document.getElementById(id + 'volume');
    let thumbMovie = document.getElementById(id);
    let poster = document.getElementById(posterId);
    
    if (window.location.href.includes('home')) {
      let vid = document.querySelector(".brand-container-video.featured");
      vid.currentTime = 30;
      vid.muted = false;
    }

    volume.style.display = 'none';
    thumbMovie.pause();
    // console.log('exit', indexMovie, `STOPPED AT ${indexMovie.currentTime}`, this.state);
    poster.style.display = 'none';
    thumbMovie.load();
    thumbMovie.muted = false;
    this.setState({ mute: 'volume_up'})
    thumbMovie.style.display = 'inline-block';
  }

  stopFeatured() {
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
    let featuredMovie = document.getElementById('brand-container-video');
    // video.style.animation = 'fadeOut linear 1s';
    // movieContainer.style.animation = 'fadeOut ease 1s';
    
    if (window.featuredVolume === 'off') {
      this.setState({ mute: 'volume_off'})
    } else {
      this.setState({ mute: 'volume_up' })
    }

    featuredMovie.currentTime = 30;
    // featuredMovie.pause();
    // featuredMovie.load();
    movieContainer.style.display = 'none';
    mainContainer.style.animation = 'fadeIn ease 1s';
    mainContainer.style.height = '103vh';
  }

  showMovie(id) {
    if (window.location.href.includes('home')) {
      this.stopFeatured();
      // console.log('isdgbjkvsbdv')
    }

    let indexMovie = document.getElementById(id);
    window.movieTime = indexMovie.currentTime;

    // console.log('MOVIETIME', window.movieTime)
    
    this.props.openModal(this.props.movie.id);
  }

  // hoverPlay(event) {
  //   event.target.play();
  // }

  render() {
    // this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year);
    this.posterId = this.props.movie.id + 888;
    let watchlistId;
    let watchlist = this.props.watchlist;
    let { userMovies } = this.props;
    let windowUrl = 'home';
    let tags = this.props.movie.tags;
    let separator = <p id="tag-separator">•</p>;
    // let likes = [];
    // let dislikes = [];
    let disliked = false;
    let tag1;
    let tag2;
    let tag3;
    
    if (this.props.watchlistItem === true) {
      this.uniqueId = this.props.movie.id + 111;
    } else {
      this.uniqueId = this.props.movie.id + 999;
    }
    // if (this.props.index) {
    //   // console.log('THUMBPROPS', this.props.index, this.props.movie)
    // }

    // console.log('THUMBPROPS', this.props)

    if (tags !== undefined) {
      let separated = tags.split(', ');
      // console.log('TAGS', separateTags)

      tag1 = separated[0];
      tag2 = separated[1];
      tag3 = separated[2];
    }

    // if (this.props.likes) {
    //   for (let i = 0; i < this.props.likes.length; i++) {
    //     let movie = this.props.likes[i];
    //     likes.push(movie.movie_id);
    //   }
    //   console.log('likes', likes)
    // }

    if (this.props.dislikes) {
      for (let i = 0; i < this.props.dislikes.length; i++) {
        let dislike = this.props.dislikes[i];
        // console.log('DL', dislike, this.props.movie.id)

        if (dislike.movie_id === this.props.movie.id) {
          disliked = true;
          break;
        }
        // console.log(`DISLIKED ${disliked}`, dislike, `MOVIEID = ${this.props.movie.id}`)
      }
    }



    // let movieCheck = false;

    if (!window.location.href.includes('home')) {
      windowUrl = 'other';
      // console.log('disliked', disliked)
    } 

    if (watchlist) { 

      // if (userMovies) {
      //   if (userMovies.includes(this.props.movie.id)) {
      //     movieCheck = true;
      //   }
      // }
      
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];
        // console.log('WATCHLIST MOVIE', watchlistMovie)
        if (watchlistMovie.movie_id === this.props.movie.id) {
          watchlistId = watchlistMovie.id;
          // console.log('WATCHLIST ID', watchlistId)
          break;
        } 
         // else {
        //   watchlistId = watchlistMovie.id;
        // }
      } 
    }    




    // console.log('THUMBMOVIE', this.props) //  onMouseOver={event => this.hoverPlay(event)} onMouseOut={event => event.target.load()}
    
    return (
      <div className={ 
        windowUrl === 'home' && this.props.index === 0 ? "thumbnail-container first" 

        : windowUrl === 'home' && this.props.index === 4 && this.props.brand === 1 ? "thumbnail-container middle disney"

        : windowUrl === 'home' && this.props.index === 4 && this.props.brand === 2 ? "thumbnail-container middle pixar"

        : windowUrl === 'home' && this.props.index === 4 && this.props.brand === 3 ? "thumbnail-container middle marvel"
 
        : windowUrl === 'home' && this.props.index === 4 && this.props.brand === 4 ? "thumbnail-container middle star-wars"

        : windowUrl === 'home' && this.props.index === 4 && this.props.brand === 5 ? "thumbnail-container middle nat-geo" 
  
        : windowUrl === 'home' && this.props.index === 4 && this.props.brand === 6 ? "thumbnail-container middle watchlist"

        : windowUrl === 'home' && this.props.index === 8 ? "thumbnail-container last" 

        : windowUrl === 'home' ? "thumbnail-container" 
        
        : "thumbnail-specific"}   
        
        id={ disliked === true ? 'disliked' : "" }
        
        onMouseEnter={() => this.hoverVideo(this.uniqueId)} onMouseLeave={() => this.exitVideo(this.uniqueId, this.posterId)}> 

        <img 
          alt='' 
          id={this.posterId}
          src={this.props.movie.image_url} 
          className={windowUrl === 'home' ? "thumbnail" : "thumbnail sorted"} 
          onClick={() => this.showMovie(this.uniqueId)}
          style={{ display: 'none'}}
        />

        <video 
          id={this.uniqueId} 
          className={windowUrl === 'home' ? "thumbnail" : "thumbnail sorted"}
          poster={this.props.movie.image_url} 
          onClick={() => this.showMovie(this.uniqueId)}
          muted={false}
          onEnded={() => this.displayPoster(this.posterId, this.uniqueId)}
        >

          <source src={this.props.test} type="video/mp4" /> 
        </video>

        <div className={windowUrl === 'home' ? 'mute-and-refresh' : 'mute-and-refresh sorted'}>
          <span 
            className='material-icons-round featured-volume' id={this.uniqueId + 'volume'}
            onClick={this.state.moviePlay === true ? () => this.handleMute(this.uniqueId) : () => this.replayFeatured(this.posterId, this.uniqueId)}
          >
            { this.state.moviePlay === true ? 
              this.state.mute : 'refresh' 
            }
          </span>
        </div>

        <div className="thumbnail-functions">
          <div className="thumbnail-buttons">
            <div className="thumbnail-buttons-left">
              <span 
                className="material-icons thumb-play-circle"
                onClick={this.watchMovie}
              >
                play_circle </span>
              <WatchlistButtonContainer watchlistId={watchlistId} watchlist={watchlist} movieId={this.props.movie.id} />
              <LikeButtonsContainer movieId={this.props.movie.id} />
            </div>

            <div className="thumbnail-buttons-right">
              <span className="material-icons-outlined expand-modal" onClick={() => this.showMovie(this.uniqueId)}>
                expand_more
              </span>
            </div>
          </div>

          <div className="thumbnail-details">
            <h1>100% Match</h1>
            <h3>
              <strong className="thumb-rating">{this.props.movie.rating}</strong> 
              <strong className="thumb-runtime">{this.props.movie.runtime}</strong>
            </h3>
          </div>
          <div className="thumbnail-tags">
            <li>{tag1}</li>
              {separator}
            <li>{tag2}</li>
              {separator}
            <li>{tag3}</li>
          </div>
        </div>
      </div>
    )
  }
}

export default Thumbnail;