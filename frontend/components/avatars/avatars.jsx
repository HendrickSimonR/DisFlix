import React from 'react';

class Avatars extends React.Component {
  constructor(props) {
    super(props)
  } 

  render() {
    console.log('AVATARPROPS', this.props)

    return(
      <div className='select-profile-container'>
            <div id="avi-box">
              <input type="radio" className='image-radio' name='avi' id="avi-akali"  value="https://i.imgur.com/gzZ9eH7.jpg"  /><label for="avi-akali"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-akuma"  value="https://i.imgur.com/beL8b4v.jpg"  /><label for="avi-akuma"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-dmc"  value="https://i.imgur.com/xkeGEJT.png"  /><label for="avi-dmc"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-lara"  value="https://i.imgur.com/ktarjMI.jpg"  /><label for="avi-lara"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-keanu"  value="https://i.imgur.com/DaAEwvQ.jpg"  /><label for="avi-keanu"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-karin"  value="https://i.imgur.com/tIO5OeK.jpg"  /><label for="avi-karin"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-kratos"  value="https://i.imgur.com/aEeE4Jb.jpg"  /><label for="avi-kratos"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-sora"  value="https://i.imgur.com/q9r7Thq.png"  /><label for="avi-sora"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-miku"  value="https://i.imgur.com/TgO2Eqb.jpg"  /><label for="avi-miku"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-spidey"  value="https://i.imgur.com/kNuWjTs.jpg"  /><label for="avi-spidey"></label>
              {/* <input type="radio" className='image-radio' name='avi' id="avi-default" checked={this.state.profileImgUrl === "https://ubisoft-avatars.akamaized.net/46564bd6-ef0b-4b05-97ec-68d8473167c6/default_256_256.png"} value="https://ubisoft-avatars.akamaized.net/46564bd6-ef0b-4b05-97ec-68d8473167c6/default_256_256.png"  /><label for="avi-default"></label> */}
              <input type="radio" className='image-radio' name='avi' id="avi-chunli"  value="https://i.imgur.com/YBluko7.jpg"  /><label for="avi-chunli"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-cj"  value="https://i.imgur.com/fJhgSro.jpg"  /><label for="avi-cj"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-peach"  value="https://i.imgur.com/fPM0ab5.png"  /><label for="avi-peach"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-samus"  value="https://i.imgur.com/ofMRQhY.png"  /><label for="avi-samus"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-shyguy"  value="https://i.imgur.com/7nNsCKi.jpg"  /><label for="avi-shyguy"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-chief"  value="https://i.imgur.com/5vM7wn5.jpg"  /><label for="avi-chief"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-tifa"  value="https://i.imgur.com/iEs6nvG.jpg"  /><label for="avi-tifa"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-ezio"  value="https://i.imgur.com/lT8SIAO.jpg"  /><label for="avi-ezio"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-fortnite"  value="https://i.imgur.com/oPG6WtS.jpg"  /><label for="avi-fortnite"></label>
              <input type="radio" className='image-radio' name='avi' id="avi-rindou"  value="https://i.imgur.com/Ta37y5u.png"  /><label for="avi-rindou"></label>
            </div>
          </div>
    )
  }
};

export default Avatars;