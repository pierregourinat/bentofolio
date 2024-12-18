import { FaPhone } from "react-icons/fa6";
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
        <p>pierregourinat@gmail.com</p>
        <div className="phoneWrapper">
          <FaPhone />
          <p>06 86 01 25 88</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
