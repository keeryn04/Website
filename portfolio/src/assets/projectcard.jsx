import React from 'react';

function ProjectCard({ title, images, description, link }) {
  return (
    <div className="project">
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="description">
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
