import "../styles/Presentation.css";
import SocialsBtn from "./SocialsBtn";

function Presentation() {
  return (
    <div className="presentationWrapper backgroundGradient">
      <div>
        <h2>PRESENTATION</h2>
        <p>
          Passionné par le web design, je souhaite mettre mon expérience et mes
          nouvelles compétences techniques au service de l&apos;intégration web et la
          création d&apos;interfaces optimisées.
        </p>
      </div>
      <SocialsBtn />
    </div>
  );
}

export default Presentation;
