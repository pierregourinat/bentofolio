import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import GitHubProjects from "./components/GitHubProjects";
import Profile from "./components/Profile";
import SocialsBtn from "./components/SocialsBtn";
import backgroundImage from "./assets/images/mykyta-martynenko-_1UF_3TlKcQ-unsplash.jpg";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Career from "./components/Career";

function App() {
  return (
    <>
      <BackgroundImage src={backgroundImage} />
      <div className="bentoContainer">
        <Profile />
        <Presentation />
        <Skills />
        <SocialsBtn />
        <Career />
        <GitHubProjects />
      </div>
    </>
  );
}

export default App;
