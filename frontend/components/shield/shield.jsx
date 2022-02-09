import React from 'react';

class Shield extends React.Component {
  render() {
    return(
      <div id='shield' className='shield'>
        <h1>Please turn device to continue</h1>   
        <img 
          alt='' 
          className='shield-gif'
          src="https://media4.giphy.com/media/I6EJeAK6a82udA6Snc/giphy.gif?cid=790b7611f53f995d9e7e9232144d733c7d911f378edc2afc&rid=giphy.gif&ct=s" 
        />     
      </div>
    )
  }
}

export default Shield;