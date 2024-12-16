import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experienceWrapper">
      <h2>Experience</h2>
      <div className="experienceSection">
        <h3>PROJETS OPENCLASSROOMS - INTEGRATION WEB</h3>
        <lu>
          <li>Développement d’une page web dynamique, application web</li>
          <li>Intégration du frontend d’une application bancaire</li>
          <li>Apprentissage des langages frontend</li>
          <li>Initiation au backend</li>
          <li>Processus d’intégration via l’utilisation d’une maquette</li>
        </lu>
      </div>
      <div className="experienceSection">
        <h3>FREELANCE - DESIGN GRAPHIQUE</h3>
        <lu>
          <li>
            Bannières, miniatures des vidéos et visuels pour un podcast de
            discussion d’une communauté en ligne
          </li>
          <li>Montage vidéo des VODs du podcast</li>
          <li>Création de guides sous forme d’infographie</li>
        </lu>
      </div>
      <div className="experienceSection">
        <h3>COMMUNITY MANAGER - GOBLINZ STUDIO</h3>
        <lu>
          <li>CDI dans un studio de développement de jeux vidéo indépendant</li>
          <li>Création et optimisation des publicités Facebook et Instagram</li>
          <li>Visuels, trailers, vidéos et GIFs </li>
          <li>Print, cartes de visite, tract QRCode, bannières, affiches</li>
          <li>Mise à jour du site internet du studio</li>
        </lu>
      </div>
    </div>
  );
}

export default Experience;
