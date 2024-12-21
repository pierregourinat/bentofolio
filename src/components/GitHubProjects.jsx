import React, { useState } from "react";
import projectsData from "../data/projects.json";
import "../styles/GitHubProjects.css";

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
    </div>
  );
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
