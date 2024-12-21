import "../styles/BackgroundImage.css";
import backgroundImage from "/images/mykyta-martynenko-_1UF_3TlKcQ-unsplash.jpg";

const BackgroundImage = () => {
  return (
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default BackgroundImage;
