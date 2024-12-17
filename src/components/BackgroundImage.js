import "../styles/BackgroundImage.css";

const BackgroundImage = ({ src }) => {
  return (
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export default BackgroundImage;
