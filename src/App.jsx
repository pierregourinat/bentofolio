import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Career from "./components/Career";
import GitHubProjects from "./components/GitHubProjects";
import Presentation from "./components/Presentation";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <BackgroundImage />
      <div className="bentoContainer">
        <Profile />
        <Presentation />
        <Skills />
        <Career />
        <GitHubProjects />
      </div>
    </>
  );
}

export default App;
