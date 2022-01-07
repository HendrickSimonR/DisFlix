import * as React from 'react';
import ReactDOM from 'react-dom';
// import PlayArrow from '@mui/material/Button';

function Featured() {
  return (
    <div className="featured">
      {/* <img className="featured-background" src="https://i.imgur.com/roimLHs.jpg" alt="" /> */}

      <div className="featured-info">
        <img className="featured-logo" src="https://i.imgur.com/bfllKfa.png" alt="" />
        
        
        
        {/* <div className="blurb">
          <h3>In celebration of the 50th Anniversary of</h3> 
          <h3>Walt Disney World Resort, taking viewers on</h3> 
          <h3>a journey spanning half a century and beyond.</h3>
        </div> */}



        <div className="featured-buttons">
          {/* <button variant="contained" className="featured-play"> */}
            {/* <PlayArrow /> */}
            {/* <span>Play</span> */}
          {/* </button> */}
          {/* <button className="featured-more"> */}
            {/* <InfoOutlined /> */}
            {/* <span>More Info</span> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  )
}


export default Featured;