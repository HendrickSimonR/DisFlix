import React from 'react';

class OutsideClickHandler extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  closeSearchBar() {
    const input = document.querySelector("#search-input");
    const button = document.querySelector("#search-button");
    input.classList.remove("search-input");
    button.classList.remove("search-button-expanded"); 
    input.classList.add("search-input-hidden");
    button.classList.add("search-button"); 


    // html.addEventListener("click", function (e) {
    //   if (e.target !== input) {
    //     input.classList.remove("search-input");
    //     input.classList.add("searc-input-hidden")
    //   }
    // });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
      this.closeSearchBar();
    }
  }

  render() {
    return (
      <div ref={this.wrapperRef}>
        {this.props.children}
      </div>
    )
  }
}

export default OutsideClickHandler;