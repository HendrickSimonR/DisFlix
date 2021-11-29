// import React from 'react';
// import { Link } from 'react-router-dom';


// class SelectProfile extends React.Component {
//   constructor(props){
//     super(props);
//     this.hideProf = this.hideProf.bind(this)
//     this.moana = this.moana.bind(this)
//     this.handleMickey = this.handleMickey.bind(this)
//     this.handleSully = this.handleSully.bind(this)
//   }

//   moana(e) {
//     window.picUrl = window.moana;
//     this.hideProf();
//   }

//     handleMickey(e) {
//         window.picUrl = window.mickey;
//         this.hideProf();
//     }

//     handleSully(e) {
//         window.picUrl = window.sully;
//         this.hideProf();
//     }

//     hideSelect(e){
//       let profileDiv = document.querySelector('.select-profile-container');
//       profileDiv.classList.add('hidden');
//       window.profHidden = true;
//     }

//     render() {
//         return (
//         <div className="select-profile-container">
//             <img src={window.logo} className="select-profile-logo" />
//             <h1>Who's watching?</h1>
//             <ul className="select-profile">
//             <li><Link className="pic-container" to="/home"><img onClick={this.handleMickey} className="pic-choose" src={window.mickey}/><h2>Mickey</h2></Link></li>
//             <li><Link className="pic-container" to="/home"><img onClick={this.moana} className="pic-choose" src={window.moana}/><h2>Moana</h2></Link></li>
//             <li><Link className="pic-container" to="/home"><img onClick={this.handleSully} className="pic-choose" src={window.sully}/><h2>Sully</h2></Link></li>
//             </ul>
//         </div>
//         );
//     }
//     }

// export default SelectProfile;
