import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profileWrapper">
      <div>Logo</div>
      <div className="profileInfo">
        <p>Pierre Gourinat</p>
        <h1>Intégrateur web junior</h1>
      </div>
      <div className="profileContact">
        <p>pierregourinat@gmail.com</p>
        <p>06 86 01 25 88</p>
      </div>
    </div>
  );
}

export default Profile;
