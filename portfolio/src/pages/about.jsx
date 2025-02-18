import portrait from '/images/me.jpg';
import '../styles/aboutpage.css';

function AboutPage() {
    return (
        <div>
            <title>About | Keeryn Johnson</title>

            <div className="about-me">
                <img src={portrait} alt="Portrait Not Found" className="my-portrait" />
            
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
        </div>
    );
}

export default AboutPage