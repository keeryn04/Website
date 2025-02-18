import '../styles/workpage.css';
import ProjectCard from '../assets/projectcard';

function Workpage() {
  const projects = [
    {
      title: 'Built to Scale Fish',
      images: [
        { src: '/images/scalefish/homepage.png', alt: 'Built to Scale 1.0' },
        { src: '/images/scalefish/gameplay.png', alt: 'Built to Scale 1.1' },
      ],
      description: `This was my very first Game Jam, as I had just recently started game development at this point.
       My friends and I made Built to Scale Fish based on the prompt "Built to Scale", where we took it very literal.
        We built the project in Unity over 48 hours (during work as well!) and made a infinite point collection game 
        where you slice fish that jump at you. Although we didn't do too great, we learned a lot in the game making 
        process and brought our experience to the new games we're developing.`,
      link: 'https://evanmann.itch.io/built-to-scale-fish'
    },
    {
      title: 'ReadBack',
      images: [
        { src: '/images/readback/liveview.png', alt: 'ReadBack 1.0' },
        { src: '/images/readback/review.png', alt: 'ReadBack 1.1'},
      ],
      description: `This was my second Hackathon project, where we were tasked with making a program that would "leverage technology to 
      provide access to justice for all". It uses a React-based frontend with a PostgreSQL backend, integrated with a Python implementation. 
      It includes features like ChatGPT definition expansion for further understanding, audio description for photos, and livestream court 
      viewing. With ReadBack, we ended up placing 3rd overall at Hack the Change 2024!`,
      link: 'https://devpost.com/software/readback-live-transcript-system'
    },
    {
      title: 'Self Controlled Garden',
      images: [
        { src: '/images/garden/garden2.jpg', alt: 'Garden 1.0' },
        { src: '/images/garden/garden4.jpg', alt: 'Garden 1.1' },
      ],
      description: `This is the first engineering project I worked on during my university career. The project included 3D printing an outer 
      shell, coding the Arduino to control timing of the lights and watering, and wiring the system together.`,
    },
    {
      title: 'Handheld Game Console',
      images: [
        { src: '/images/game/game1.jpg', alt: 'Game 1.0' },
        { src: '/images/game/game3.jpg', alt: 'Game 1.1' },
      ],
      description: `My second engineering project was a handheld game console, which ran fully off an Arduino Uno and 2 AA batteries. 
      We had to design a game to go along with the console, which came with the struggle of portable power that the Arduino had.`,
    },
    {
      title: 'Hospital Appointment Interface',
      images: [
        { src: '/images/foothills/appointments.png', alt: 'Foothills 1.0' },
      ],
      description: `This was my first Hackathon project, where we were tasked to make a mockup of the Foothills Hospital Booking System. 
      It uses a React-based frontend with a PostgreSQL backend, integrated with a Javascript implementation. While we didn't win the competition, 
      we completed the project to further add to the skills of our software journey.`,
    },
  ];

  return (
    <div>
        <title>Work | Keeryn Johnson</title>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            images={project.images}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Workpage;