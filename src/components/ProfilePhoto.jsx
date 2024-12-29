import "../styles/ProfilePhoto.css";
import profilePhoto from "/images/peter_graphs.png";

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
