import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
// const disneyButtonVid = require('../../../app/assets/videos/disneyButton.mp4');


class BrandButtons extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      brands: []
    };
    
    this.getBrands = this.getBrands.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    window.scrollTo(0, 0);
  }

  getBrands() {
    $.ajax({
      url: "/api/brands"
    }).then(brands => {
      this.setState({ brands })
    });
  }

  componentDidMount() {
    // this.getBrands();
  }

  render() {
    return (
      <div className='brand-buttons-container'>

        <div className='brand-button brand-disney'>
          <Link to='/disney'>
            <img onClick={this.handleScroll} src={window.disneyButton} className="brand-button-img" alt="" />
          </Link>
        </div>

        <div className='brand-button brand-pixar'>
          <Link to='/pixar'>
            <img onClick={this.handleScroll} src={window.pixarButton} className="brand-button-img" alt="" />
          </Link>
        </div>

        <div className='brand-button brand-marvel'>
          <Link to='/marvel'>
            <img onClick={this.handleScroll} src={window.marvelButton} className="brand-button-img" alt="" />
          </Link>
        </div>

        <div className='brand-button brand-star-wars'>
          <Link to='/starwars'>
            <img onClick={this.handleScroll} src={window.swButton} className="brand-button-img" alt="" />
          </Link>
        </div>

        <div className='brand-button brand-nat-geo'>
          <Link to='/natgeo'>
            <img onClick={this.handleScroll} src={window.natButton} className="brand-button-img" alt="" />
          </Link>
        </div>

      </div>
    );
  }
}


export default BrandButtons;

{/* <video autoPlay={true} loop={true} playsInline={true}>
            <source src='../../../app/assets/videos/disneyButton.mp4' type='video/mp4' />
          </video> */}
{/* <video loop={true} autoPlay={true} playsInline={true} className="brand-button-video">  */ }
{/* <source src={brand.button_video_url} type="video/mp4" />  */ }
{/* </video> */ }
{/* <video controls autoPlay className="brand-button-video"> <source src={this.props.brand.button_video} type="video/mp4" /> </video> */ }