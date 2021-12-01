import React from 'react';
import { Link } from 'react-router-dom';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <li className="thumbnail-container">
        <img className="thumbnail" src={this.props.movie.image_url}></img>
      </li>
    )
  }
}

export default Thumbnail;