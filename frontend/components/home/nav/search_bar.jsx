import React from 'react';
import OutsideClickHandler from './outside_click_handler';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      search: '' 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(e){
    this.setState({ search: e.target.value });
    let url = '/search/' + e.target.value;
    this.props.history.push({ pathname: url });    
  }

  handleButton(e) {
    let searchInput = document.querySelector('#search-input');
      
    if (searchInput.classList.contains('search-input-hidden')){
      searchInput.classList.remove('search-input-hidden');
      searchInput.classList.add('search-input');
      searchInput.disabled = false;
      searchInput.select();
    } else {
      searchInput.classList.remove('search-input');
      searchInput.classList.add('search-input-hidden');
      searchInput.disabled = true;
    }

    let searchButton = document.querySelector('#search-button');
      
    if (searchButton.classList.contains('search-button')){
      searchButton.classList.remove('search-button');
      searchButton.classList.add('search-button-expanded');
    } else {
      let searchButton = document.querySelector('.search-button-expanded');
      searchButton.classList.remove('search-button-expanded');
      searchButton.classList.add('search-button');
    }
  }


  

  render() {
    return (
      <OutsideClickHandler>
        <div className="search-bar-container">
          <div onClick={this.handleButton} className="search-button" id="search-button">
            <span className="material-icons search-icon">
              search
            </span>
          </div>

          <input type="text"
            id="search-input"
            placeholder="Title, people, genres, keywords"
            value={this.state.search}
            onChange={this.handleChange}
            className="search-input-hidden"
            disabled
          />
          
        </div>
      </OutsideClickHandler>
    );
  }
}

export default SearchBar;
