import "../styles/SocialsBtn.css";

function SocialsBtn() {
  return <button className="SocialsBtn">GitHub</button>;
}

export default SocialsBtn;

// import { Github, Linkedin, Dribbble } from 'lucide-react';

// const SocialsBtn = () => {
//   const socialProfiles = [
//     {
//       platform: 'Github',
//       url: 'https://github.com/votrePseudo',
//       icon: <Github />,
//       className: 'github-btn'
//     },
//     {
//       platform: 'LinkedIn',
//       url: 'https://www.linkedin.com/in/votrePseudo',
//       icon: <Linkedin />,
//       className: 'linkedin-btn'
//     },
//     {
//       platform: 'Dribbble',
//       url: 'https://dribbble.com/votrePseudo',
//       icon: <Dribbble />,
//       className: 'dribbble-btn'
//     }
//   ];

//   return (
//     <div className="social-links-container">
//       {socialProfiles.map((profile) => (
//         <a
//           key={profile.platform}
//           href={profile.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`social-btn ${profile.className}`}
//           aria-label={`Visiter mon profil ${profile.platform}`}
//         >
//           {profile.icon}
//         </a>
//       ))}
//     </div>
//   );
// };
