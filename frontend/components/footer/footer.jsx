import React from 'react';

function Footer() {
  return (
    <div className={!window.location.href.includes('home') ? "footer brand" : "footer"}>
        <h1 className="footer-details">
          Thank you for stopping by!
          This website is not-for-profit.
          I simply love all things Disney!
          Please contact me using the links in the dropdown menu.
          <p id="visit-on-desktop">&nbsp;Visit my site on a desktop/laptop for the full experience!</p>
        </h1>
    </div>
  )
}

export default Footer;