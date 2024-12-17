import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Formation from "./components/Formation";
import GitHubProjects from "./components/GitHubProjects";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import SocialsBtn from "./components/SocialsBtn";
import Tools from "./components/Tools";
import backgroundImage from "./assets/images/mykyta-martynenko-_1UF_3TlKcQ-unsplash.jpg";

function App() {
  return (
    <>
      <BackgroundImage src={backgroundImage} />
      <div className="bentoContainer">
        <div className="upperContainer">
          <Profile />
          <div className="skillsContainer">
            <Skills />
            <Tools />
          </div>
          <SocialsBtn />
        </div>
        <div className="lowerContainer">
          <Formation />
          <GitHubProjects />
        </div>
      </div>
    </>
  );
}

export default App;
