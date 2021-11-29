import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
// const disneyButtonVid = require('../../../app/assets/videos/disneyButton.mp4');


class BrandButtons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='brand-buttons-container'>
        <div className='brand-button'>
          <img src={window.disneyButton} class="brand-button-img" alt="" />
          <ReactPlayer url='https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4' mute loop className="brand-button-video" />
        </div>
        <div className='brand-button'>
          <img src={window.pixarButton} class="brand-button-img" alt="" />
          <ReactPlayer url='https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4' mute loop className="brand-button-video" />
        </div>
        <div className='brand-button'>
          <img src={window.marvelButton} class="brand-button-img" alt="" />
          <ReactPlayer url='https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4' mute loop className="brand-button-video" />
        </div>
        <div className='brand-button'>
          <img src={window.swButton} class="brand-button-img" alt="" />
          <ReactPlayer url='https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4' mute loop className="brand-button-video" />
        </div>
        <div className='brand-button'>
          <img src={window.natButton} class="brand-button-img" alt="" />
          <ReactPlayer url='https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4' mute loop className="brand-button-video" />
        </div>
      </div>
    );
  }
}


export default BrandButtons;