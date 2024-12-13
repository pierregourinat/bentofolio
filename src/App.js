import "./App.css";
import Profile from "./components/Profile";
import SocialsBtn from "./components/SocialsBtn";

function App() {
  return (
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
  );
}

export default App;
