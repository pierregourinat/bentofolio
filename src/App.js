import "./App.css";
import Experience from "./components/Experience";
import Formation from "./components/Formation";
import LastProject from "./components/LastProject";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialsBtn from "./components/SocialsBtn";
import Tools from "./components/Tools";

function App() {
  return (
    <div className="bentoContainer">
      <div className="upperContainer">
        <Profile />
        <div className="skillsContainer">
          <Skills />
          <div className="skillsLowerContainer">
            <Tools />
            <LastProject />
          </div>
        </div>
        <div className="btnWrapper">
          <SocialsBtn />
          <SocialsBtn />
          <SocialsBtn />
        </div>
      </div>
      <div className="lowerContainer">
        <Formation />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
