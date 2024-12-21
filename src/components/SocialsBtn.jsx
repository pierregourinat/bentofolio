import "../styles/SocialsBtn.css";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const SocialsBtn = () => {
  const socialProfiles = [
    {
      platform: "Github",
      url: "https://github.com/pierregourinat",
      icon: <FaGithub />,
      className: "githubBtn",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/pierregourinat/",
      icon: <FaLinkedin />,
      className: "linkedinBtn",
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/PeterGraphs",
      icon: <FaDribbble />,
      className: "dribbbleBtn",
    },
    {
      platform: "BlueSky",
      url: "https://bsky.app/profile/pet3r.bsky.social",
      icon: <FaBluesky />,
      className: "blueskyBtn",
    },
  ];

  return (
    <div className="socialLinksContainer">
      {socialProfiles.map((profile) => (
        <a
          key={profile.platform}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`socialBtn ${profile.className}`}
          aria-label={`Visiter mon profil ${profile.platform}`}
        >
          {profile.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsBtn;
