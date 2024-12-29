import "../styles/BackgroundImage.css";
import backgroundImage from "/images/fern.jpg";

const BackgroundImage = () => {
  return (
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default BackgroundImage;
