import "./App.css";
import Formation from "./components/Formation";
import Profile from "./components/Profile";
import SocialsBtn from "./components/SocialsBtn";

function App() {
  return (
    <div className="bentoContainer">
      <div className="upperContainer">
        <Profile />
        <div className="skillsWrapper">
          <Profile />
          <div className="skillsLowerSection">
            <Profile />
            <Profile />
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
        <Formation />
        <Formation />
      </div>
    </div>
  );
}

export default App;
