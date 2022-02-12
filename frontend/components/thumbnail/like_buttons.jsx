import React from 'react';

class LikeButtons extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
    this.toggleDislike = this.toggleDislike.bind(this);
  }

  toggleLike() {
    if (this.liked === true) {
      this.liked = false;
      this.props.deleteLike({ 
        like_id: this.likeId, 
        user_id: this.props.user, 
        movie_id: this.props.movieId 
      });
    
    } else if (this.disliked === true) {
      this.disliked = false;
      this.liked = true;

      this.props.deleteDislike({ 
        dislike_id: this.dislikeId, 
        user_id: this.props.user, 
        movie_id: this.props.movieId 
      });

      this.props.newLike({ 
        movie_id: this.props.movieId, 
        user_id: this.props.user 
      });

    } else {
      this.liked = true;

      this.props.newLike({ 
        movie_id: this.props.movieId, 
        user_id: this.props.user 
      });
    }
  }

  toggleDislike() {
    if (this.disliked === true) {
      this.disliked = false;

      this.props.deleteDislike({ 
        dislike_id: this.dislikeId, 
        user_id: this.props.user, 
        movie_id: this.props.movieId 
      });

    } else if (this.liked === true) {
      this.liked = false;
      this.disliked = true;

      this.props.deleteLike({ 
        like_id: this.likeId, 
        user_id: this.props.user, 
        movie_id: this.props.movieId 
      });

      this.props.newDislike({ 
        movie_id: this.props.movieId, 
        user_id: this.props.user 
      });

    } else {
      this.disliked = true;
      
      this.props.newDislike({ 
        movie_id: this.props.movieId, 
        user_id: this.props.user 
      });
    }
  }

  render () { 
    this.liked = false;
    this.disliked = false;
    this.likeId;
    this.dislikeId;

    let blankThumbUp = 
      <span 
        className="material-icons-outlined like-button up" 
        onClick={this.toggleLike}
      >
        thumb_up
      </span>

    let filledThumbUp = 
      <span 
        className="material-icons-round like-button up" 
        onClick={this.toggleLike}
      >
        thumb_up
      </span>

    let blankThumbDown = 
      <span 
        className="material-icons-outlined like-button down" 
        onClick={this.toggleDislike}
      >
        thumb_down
      </span>

    let filledThumbDown = 
      <span 
        className="material-icons-round like-button down" 
        onClick={this.toggleDislike}
      >
        thumb_down
      </span>

    for (let i = 0; i < this.props.likes.length; i++) {
      let like = this.props.likes[i];
      let movie = like.movie_id;
      let user = like.user_id;

      if (this.props.user === user && this.props.movieId === movie) {
        this.liked = true;
        this.likeId = like.id;
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
        break;
      }
    }


    return (
      <div className={this.props.modalButton ? "like-buttons modal" : "like-buttons"}>
        <div>
          {this.liked === true ? filledThumbUp : blankThumbUp }
        </div>
        <div>
          {this.disliked === true ? filledThumbDown : blankThumbDown }
        </div>
      </div>
    )
  }
}

export default LikeButtons;