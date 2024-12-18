import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaTrello,
} from "react-icons/fa6";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiMiro,
  SiNotion,
} from "react-icons/si";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skillsWrapper backgroundGradient">
      <div className="skills">
        <h2>Compétences</h2>
        <h3>Frontend</h3>
        <div className="skillIcons">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaSass title="SASS" />
          <FaJs title="JavaScript" />
          <FaReact title="React" />
        </div>
        <h3>Backend</h3>
        <div className="skillIcons">
          <FaNodeJs title="NodeJS" />
        </div>
      </div>
      <div className="tools">
        <h2>Outils</h2>
        <div className="skillIcons">
          <FaFigma title="Figma" />
          <SiMiro title="Miro" />
          <FaTrello title="Trello" />
          <SiNotion title="Notion" />
        </div>
        <div className="skillIcons">
          <SiAdobeillustrator title="Adobe Illustrator" />
          <SiAdobeaftereffects title="Adobe After Effects" />
          <SiAdobepremierepro title="Adobe Premiere Pro" />
          <SiAdobephotoshop title="Adobe Photoshop" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
