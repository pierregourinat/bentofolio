import "../styles/Career.css";

function Career() {
  return (
    <div className="careerWrapper backgroundGradient">
      <div className="formationWrapper">
        <h2>Formation</h2>
        <h3>PARCOURS INTÉGRATEUR WEB - 2024</h3>
        <p>Certification professionnelle “Développeur Informatique“</p>
        <div>
          <h3>
            BACHELOR CONCEPTION ET MANAGEMENT DES ACTIVITÉS WEB - 2016/2019
          </h3>
          <p>Web International School, Campus de Montpellier</p>
        </div>
      </div>
      <div className="experienceWrapper">
        <h2>Expérience</h2>
        <div className="experienceSection">
          <h3>PROJETS OPENCLASSROOMS - 2024</h3>
          <p>Intégration Web</p>
        </div>
        <div className="experienceSection">
          <h3>FREELANCE - 2024</h3>
          <p>Design graghique</p>
        </div>
        <div className="experienceSection">
          <h3>COMMUNITY MANAGER - 2022/2023</h3>
          <p>Goblinz Studio</p>
        </div>
      </div>
    </div>
  );
}

export default Career;
