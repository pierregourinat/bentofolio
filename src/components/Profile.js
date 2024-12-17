import "../styles/Profile.css";
import ProfilePhoto from "./ProfilePhoto";
import { FaPhone } from "react-icons/fa6";

function Profile() {
  return (
    <div className="profileWrapper backgroundGradient">
      <div>
        <ProfilePhoto />
      </div>
      <div className="profileInfo">
        <p>Pierre Gourinat</p>
        <h1>Intégrateur web junior</h1>
      </div>
      <div className="profileContact">
        <p>pierregourinat@gmail.com</p>
        <FaPhone />
        <p>06 86 01 25 88</p>
      </div>
    </div>
  );
}

export default Profile;
