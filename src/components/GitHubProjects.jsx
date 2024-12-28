import { useState } from "react";
import PropTypes from 'prop-types';
import projectsData from "../data/projects.json";
import "../styles/GitHubProjects.css";

const TechBadge = ({ tech }) => (
  <span className="techBadge">
    {tech}
  </span>
);

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(project.githubLink, "_blank");
  };

  return (
    <div
      className={`projectCard ${isHovered ? "projectCardHover" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h3 className="projectCardTitle">{project.name}</h3>
      <div className="projectCardDescription">{project.description}</div>
      <div className="techBadgesContainer">
        {project.technologies?.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    githubLink: PropTypes.string.isRequired
  }).isRequired
};

const GitHubProjects = () => {
  return (
    <div className="projectsContainer backgroundGradient">
      <h2>PROJETS</h2>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default GitHubProjects;