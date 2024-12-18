import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skillsWrapper backgroundGradient">
      <div className="skills">
        <h2>Compétences</h2>
        <ul>
          <li>Frontend - HTML, CSS, SASS, Javascript, React, animation CSS</li>
          <li>Backend - API REST, NodeJS</li>
          <li>Web design- appétence pour l’UX/UI</li>
        </ul>
      </div>
      <div className="tools">
        <h2>Outils</h2>
        <p>Figma, Miro, Trello, Notion, notions sur Canvas</p>
        <p>Suite Adobe - Illustrator, After Effects, Premiere Pro, Photoshop</p>
      </div>
    </div>
  );
}

export default Skills;
