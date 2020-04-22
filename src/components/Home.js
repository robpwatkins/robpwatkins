import React from 'react';
import '../components/Home.css';
import Face from '../img/first-name-face-cropper2.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-box">
        <div className="first-name-face">
          <img src={Face} alt="" />
        </div>
        <div className="first-name">Rob</div>
        <div className="last-name">Watkins</div>
        <hr />
        <div className="web-dev">Web Developer</div>
      </div>
    </div>
  )
}

export default Home;