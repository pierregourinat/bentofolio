// import "../styles/SocialsBtn.css";

// function SocialsBtn() {
//   return <button className="SocialsBtn">GitHub</button>;
// }

// export default SocialsBtn;

import React from "react";
import "../styles/SocialsBtn.css";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

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
