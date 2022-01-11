import React from 'react';

class LikeButtons extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
    this.toggleDislike = this.toggleDislike.bind(this);
  }

  componentDidMount() {
    this.props.getLikes({user_id: this.props.user});
    this.props.getDislikes({user_id: this.props.user});
  }

  toggleLike() {
    if (this.liked === true) {
      this.liked = false;
      this.props.deleteLike({like_id: this.likeId, user_id: this.props.user, movie_id: this.props.movieId});
      console.log('NO MORE LIKE', this.liked);
    } else if (this.disliked === true) {
      this.disliked = false;
      this.liked = true;
      this.props.deleteDislike({dislike_id: this.dislikeId, user_id: this.props.user, movie_id: this.props.movieId});
      console.log('NO MORE DISLIKE', this.disliked);
      this.props.newLike({ movie_id: this.props.movieId, user_id: this.props.user });
      console.log('ME LIKEY', this.liked);
    } else {
      this.liked = true;
      this.props.newLike({ movie_id: this.props.movieId, user_id: this.props.user });
      console.log('FRESH LIKE', this.liked);
    }
  }

  toggleDislike() {
    if (this.disliked === true) {
      this.disliked = false;
      this.props.deleteDislike({dislike_id: this.dislikeId, user_id: this.props.user, movie_id: this.props.movieId});
      console.log('NO MORE DISLIKE', this.disliked);
    } else if (this.liked === true) {
      this.liked = false;
      this.disliked = true;
      this.props.deleteLike({like_id: this.likeId, user_id: this.props.user, movie_id: this.props.movieId});
      console.log('NO MORE LIKE', this.liked);
      this.props.newDislike({ movie_id: this.props.movieId, user_id: this.props.user });
      console.log('ME DISLIKEY', this.disliked);
    } else {
      this.disliked = true;
      this.props.newDislike({ movie_id: this.props.movieId, user_id: this.props.user });
      console.log('FRESH DISLIKE', this.disliked);
    }
  }

  render () { 
    this.liked = false;
    this.disliked = false;
    this.likeId;
    this.dislikeId;

    let blankThumbUp = <span className="material-icons-outlined blank-thumb-up">thumb_up</span>
    let filledThumbUp = <span className="material-icons-round filled-thumb-up">thumb_up</span>
    let blankThumbDown = <span className="material-icons-outlined blank-thumb-down">thumb_down</span>
    let filledThumbDown = <span class="material-icons-round filled-thumb-down">thumb_down</span>

    for (let i = 0; i < this.props.likes.length; i++) {
      let like = this.props.likes[i];
      let movie = like.movie_id;
      let user = like.user_id;

      if (this.props.user === user && this.props.movieId === movie) {
        this.liked = true;
        this.likeId = like.id;
        // console.log('truechains', this.liked, user, movie);
        // console.log('Like Id', this.likeId);
        break;
      }
    }

    for (let i = 0; i < this.props.dislikes.length; i++) {
      let dislike = this.props.dislikes[i];
      let movie = dislike.movie_id;
      let user = dislike.user_id;

      if (this.props.user === user && this.props.movieId === movie) {
        this.disliked = true;
        this.dislikeId = dislike.id;
        // console.log('falsechains', this.liked, user, movie);
        break;
      }
    }

    return (
      <div className="like-buttons">
        <p onClick={this.toggleLike}>{ this.liked === true ? filledThumbUp : blankThumbUp }</p>
        <p onClick={this.toggleDislike}>{this.disliked === true ? filledThumbDown : blankThumbDown }</p>
      </div>
    )
  }
}

export default LikeButtons;