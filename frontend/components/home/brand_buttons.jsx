import React from 'react';
import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div className='brand-buttons-container'>

        <div className='brand-button brand-disney'>
          <Link to='/disney'>
            <img 
              alt="" 
              src={window.disneyButton} 
              onClick={this.handleScroll} 
              className="brand-button-img" 
            />
          </Link>
        </div>

        <div className='brand-button brand-pixar'>
          <Link to='/pixar'>
            <img 
              alt="" 
              src={window.pixarButton} 
              onClick={this.handleScroll} 
              className="brand-button-img" 
            />
          </Link>
        </div>

        <div className='brand-button brand-marvel'>
          <Link to='/marvel'>
            <img 
              alt="" 
              src={window.marvelButton} 
              onClick={this.handleScroll} 
              className="brand-button-img" 
            />
          </Link>
        </div>

        <div className='brand-button brand-star-wars'>
          <Link to='/starwars'>
            <img 
              alt="" 
              src={window.swButton} 
              onClick={this.handleScroll} 
              className="brand-button-img" 
            />
          </Link>
        </div>

        <div className='brand-button brand-nat-geo'>
          <Link to='/natgeo'>
            <img 
              alt="" 
              src={window.natButton} 
              onClick={this.handleScroll} 
              className="brand-button-img" 
            />
          </Link>
        </div>

      </div>
    );
  }
}

export default BrandButtons;