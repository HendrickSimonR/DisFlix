import React from "react";
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.visitSite = this.visitSite.bind(this);
  }

  visitSite(link) {
    window.open(
      link, '_blank'
    )
  }

  render() {

    console.log('ABOUT PROPS', this.props)
    return (
      <div className="about-me-modal">
        <div id='about-close' onClick={this.props.closeModal}>
          <span className="material-icons-sharp close-modal-about">
            cancel
          </span>
          <span className="material-icons-round close-fill-about">
            circle
          </span>
        </div>
        
        <div id="my-name">
          <h3>- Hendrick</h3>
          <h3 id="last-name">Ramos</h3>
        </div>
        
        <img 
          alt='' 
          src='https://i.imgur.com/jc22mUv.png' 
          className="me-at-disneyland"
        />
        
        <div className="about-me-text">
          <h1>Hey, I'm Hendrick. Thank you for visiting my site!</h1>
          <h2>
            I combined the UX/UI of Disney Plus and Netflix to develop this clone/hybrid. 
            I'm a huge fan of all things Disney, and I wanted to bring that to life with this project!
          </h2>  

          <h2>
            This website is not for profit; in fact, I am actually spending money to host these files on AWS! 
            All rights to these characters, scenes, and artwork belong to Disney.
          </h2> 
          
          <h2 id="created-with">This website was created with:</h2>
            <li>
              <img 
                src="https://i.imgur.com/OEg2zl9.png" 
                alt='' 
                className='about-logo ruby'
              />
              Ruby on Rails & JBuilder [Backend]
            </li>
            <li>
              <img 
                src="https://i.imgur.com/HhtDRhP.png" 
                alt='' 
                className='about-logo react'
              />
              React/Redux, JavaScript [Frontend]
            </li>
            <li>
              <img 
                src="https://i.imgur.com/RQKh27d.png" 
                alt='' 
                className='about-logo sass'
              />
              Sass [Styling]
            </li> 

            <li>
              <img 
                src="https://i.imgur.com/gppRG9C.png" 
                alt='' 
                className='about-logo aws'
              />
              Amazon Web Services S3 [Hosting/Data Transfer]
            </li>

            <li>
              <img 
                src="https://i.imgur.com/rN4p9N0.png" 
                alt='' 
                className='about-logo html5'
              />
              HTML5
            </li>

          <h2>If you happen to be a recruiter, look no further! I made this project the way I make all my projects: with the utmost care and attention to detail. My immense passion for creating and building is what I'll bring to your company!</h2>
          <h2>If you're just visiting, I hope you enjoy your experience, as well as the collection of scenes from these classic movies and shows!</h2>

          <h2>If you'd like to know more, please visit me at these sites:</h2>
          
          <div className="about-me-links">
            <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
              <img id='img-to-site' className='web' alt='' src='https://i.imgur.com/V1TQaje.png' />
            </li>   

            <li id="link-to-site" onClick={() => this.visitSite("https://www.linkedin.com/in/hendrick-ramos/")}>
              <img id='img-to-site' className="linked" alt='' src='https://i.imgur.com/uO5d91L.png' />
            </li>

            <li id="link-to-site" onClick={() => this.visitSite("https://angel.co/jobs/home")}>
              <img id='img-to-site' className="angel" alt='' src='https://i.imgur.com/NROnijm.png' />
            </li>  

            <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
              <img id='img-to-site' className="git" alt='' src='https://i.imgur.com/Bj3ZPbm.png' />
            </li>  
          </div>
        </div>

        <img 
          id='thank-you' 
          alt='' 
          src="https://i.imgur.com/wqSOmkW.png" 
        />

      </div>
    )
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mDTP)(About);