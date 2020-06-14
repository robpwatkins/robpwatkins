import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="mobile-box">
        <div className="mobile-skills">
        <div className="skill-box skill-box1">
                <hr className="HTML" />
                <p>HTML</p>
                <hr className="HTML" />
              </div>
              <div className="skill-box skill-box2">
                <hr className="CSS" />
                <p>CSS</p>
                <hr className="CSS" />
              </div>
              <div className="skill-box skill-box3">
                <hr className="javaScript" />
                <p>JavaScript</p>                  
                <hr className="javaScript" />
              </div>
              <div className="skill-box skill-box4">
                <hr className="react" />
                <p>React</p>                  
                <hr className="react" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="react-context" />
                <p>Context</p>                  
                <hr className="react-context" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="redux" />
                <p>Redux</p>                  
                <hr className="redux" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="redux-thunk" />
                <p>Thunk</p>                  
                <hr className="redux-thunk" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="graphQL" />
                <p>GraphQL</p>                  
                <hr className="graphQL" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="nextJS" />
                <p>NextJS</p>                  
                <hr className="nextJS" />
              </div>
              <div className="skill-box skill-box5">
                <hr className="nodeJS" />
                <p>NodeJS</p>                  
                <hr className="nodeJS" />
              </div>
              <div className="skill-box skill-box6">
                <hr className="mySQL" />
                <p>MySQL</p>                  
                <hr className="mySQL" />
              </div>
              <div className="skill-box skill-box9">
                <hr className="github" />
                <p>Git/Github</p>                  
                <hr className="github" />
              </div>
              <div className="skill-box skill-box7">
                <hr className="photoshop" />
                <p>Photoshop</p>                  
                <hr className="photoshop" />
              </div>
        </div>
        <div className="mobile-right-box">
          <div>
            <h1>Detail oriented</h1>
            <p>I take joy in working until the job is clearly done. Precision, simplicity, and eloquence are paramount to my approach.</p>
          </div>
          <div>
            <h1>People person</h1>
            <p>I thrive in group settings, care deeply about individuals, and always make clear communication a top priority.</p>
          </div>
          <div>
            <h1>Quick comprehension</h1>
            <p>After 8 months in a bootcamp I am now happily in constant learning mode, ever in search of more elegant ways to solve problems.</p>
          </div>
          <div>
            <h1>Enthusiastic attitude</h1>
            <p>If I can have fun with it, I will. In everything I do I carry with me a lighthearted positivity and a cheerful spirit.</p>
          </div>
        </div>
      </div>
      <div className="left-box">
        <div className="left-box-img">
          <div className="left-box-overlay">
            <div className="skills">
              <div className="skill-box skill-box1">
                <hr className="HTML" />
                <p>HTML</p>
                <hr className="HTML" />
              </div>
              <div className="skill-box skill-box2">
                <hr className="CSS" />
                <p>CSS</p>
                <hr className="CSS" />
              </div>
              <div className="skill-box skill-box3">
                <hr className="javaScript" />
                <p>JavaScript</p>                  
                <hr className="javaScript" />
              </div>
              <div className="skill-box skill-box4">
                <hr className="react" />
                <p>React</p>                  
                <hr className="react" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="react-context" />
                <p>Context</p>                  
                <hr className="react-context" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="redux" />
                <p>Redux</p>                  
                <hr className="redux" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="redux-thunk" />
                <p>Thunk</p>                  
                <hr className="redux-thunk" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="graphQL" />
                <p>GraphQL</p>                  
                <hr className="graphQL" />
              </div>
              <div className="skill-box skill-box10">
                <hr className="nextJS" />
                <p>NextJS</p>                  
                <hr className="nextJS" />
              </div>
              <div className="skill-box skill-box5">
                <hr className="nodeJS" />
                <p>NodeJS</p>                  
                <hr className="nodeJS" />
              </div>
              <div className="skill-box skill-box6">
                <hr className="mySQL" />
                <p>MySQL</p>                  
                <hr className="mySQL" />
              </div>
              <div className="skill-box skill-box9">
                <hr className="github" />
                <p>Git/Github</p>                  
                <hr className="github" />
              </div>
              <div className="skill-box skill-box7">
                <hr className="photoshop" />
                <p>Photoshop</p>                  
                <hr className="photoshop" />
              </div>
              {/* <div className="skill-box skill-box8"> */}
                {/* <hr className="PHP" /> */}
                {/* <p>PHP</p>                   */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div>
          <h1>Detail oriented</h1>
          <p>I take joy in working until the job is clearly done. Precision, simplicity, and eloquence are paramount to my approach.</p>
        </div>
        <div>
          <h1>People person</h1>
          <p>I thrive in group settings, care deeply about individuals, and always make clear communication a top priority.</p>
        </div>
        <div>
          <h1>Quick comprehension</h1>
          <p>After 8 months in a bootcamp I am now happily in constant learning mode, ever in search of more elegant ways to solve problems.</p>
        </div>
        <div>
          <h1>Enthusiastic attitude</h1>
          <p>If I can have fun with it, I will. In everything I do I carry with me a lighthearted positivity and a cheerful spirit.</p>
        </div>
      </div>
    </div>
  )
}

export default About;