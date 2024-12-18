import "../styles/Presentation.css";
import SocialsBtn from "./SocialsBtn";

function Presentation() {
  return (
    <div className="presentationWrapper backgroundGradient">
      <div>
        <h2>PRESENTATION</h2>
        <p>
          Passioné par le web design, je souhaite mettre mon expérience et mes
          nouvelles compétences techniques au service de l'intégration web et la
          création d'interfaces optimisées.
        </p>
      </div>
      <SocialsBtn />
      {/* <p>Mes mots-clefs :</p>
      <ul>
        <li>Frontend dev</li>
        <li>Responsive design</li>
        <li>Web design</li>
        <li>UX/UI</li>
      </ul> */}
    </div>
  );
}

export default Presentation;
