import React from 'react';
import portrait from '../images/me.jpg';

function Homepage() {
  return (
      <div>
          <title>Keeryn's World - Welcome!</title>

          <header className="header-container">
              <h1>Hey! I'm Keeryn Johnson</h1>
          </header>

          <div className="about-me">
              <img src={portrait} alt="Portrait Not Found" className="my-portrait" />;
          
              <section>
                  <h2 className="about-me-title">About Me</h2>
                  <p>I'm Keeryn Johnson, a future Software Engineer with an interest in everything tech.
                      I'm currently studying at the University of Calgary for a Software Engineering Degree 
                      with a minor in Mechatronics. I hope to become a part of the robotics industry as the 
                      future prospects of the industry are very promising. I made this website to show off 
                      any projects I am doing, receive feedback, and collaborate with others about what's 
                      going on in the world. If you wanna check out what I'm up to, you can check out the 
                      Projects tab to see all of my past projects.</p>
              </section>
          </div>

          <div className="current-plans">
              <h2><u>What I'm Up To</u></h2>
          </div>

          <div className="future-plans">
              <h2><u>My Future Plans</u></h2>
          </div>
      </div>
  );
}

export default Homepage