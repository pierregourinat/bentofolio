import profilePhoto from "../assets/images/logo-penrose-pg2-2.png";
import "../styles/ProfilePhoto.css";

function ProfilePhoto() {
  return (
    <div className="profilePhotoContainer">
      <img
        src={profilePhoto}
        alt="Logo Pierre Gourinat"
        className="profilePhoto"
      />
    </div>
  );
}

export default ProfilePhoto;
