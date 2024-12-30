import { FaPhone, FaRegEnvelope } from "react-icons/fa6";
import "../styles/Profile.css";
import ProfilePhoto from "./ProfilePhoto";

function Profile() {
  return (
    <div className="profileWrapper backgroundGradient">
      <div>
        <ProfilePhoto />
      </div>
      <div className="profileInfo">
        <h2>Pierre Gourinat</h2>
        <h1>Intégrateur web junior</h1>
      </div>
      <div className="profileContact">
        <div className="emailWrapper">
          <FaRegEnvelope />
          <a href="mailto:pierregourinat@gmail.com">
            <p>pierregourinat@gmail.com</p>
          </a>
        </div>
        <div className="phoneWrapper">
          <FaPhone />
          <a href="tel:+33686012588">
            <p>06 86 01 25 88</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;