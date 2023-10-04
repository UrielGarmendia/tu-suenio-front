
import { Mail, LinkedIn, GitHub } from "@mui/icons-material";
import style from "../DeveloperTeam/DeveloperTeam.module.css";
import { useNavigate } from "react-router-dom";

import paul from "./paul.jpg";
import joan from "./joan.jpg";
import leo from "./leo.jpg";
import pedro from "./pedro.jpg";
import uriel from "./uriel.jpg";
import kevin from "./kevin.jpg";
import jose from "./jose.jpg";
const developers = [
  {
    name: "Paul Gamarra",
    image: paul,
    linkedin: "https://www.linkedin.com/in/paul-marco-gamarra-neglia-a5313091",
    github: "https://github.com/PaulGN1992",
    email: "gamarraneglia@gmail.com"
  },
  {
    name: "Jose Gamarra",
    image: jose,
    linkedin: "https://www.linkedin.com/in/jose-gamarra-203aa8274/",
    github: "https://github.com/joseslas",
    email: "speedmax159@gmail.com1"
  },
  {
    name: "Santiago Zucchi",
    image: joan,
    linkedin: "https://www.linkedin.com/in/santiago-zucchi-4bbbaa269/",
    github: "https://github.com/SanteZ97",
    email: "Santiago_zucchi@hotmail.com"
  },
  {
    name: "Leonardo Regazzoni",
    image: leo,
    linkedin: "https://www.linkedin.com/in/leorega",
    github: "https://github.com/leorega",
    email: "leonardoregazzoni@gmail.com"
  },
  {
    name: "Pedro Loria",
    image: pedro,
    linkedin: "https://www.linkedin.com/in/loria-pedro-552068255/",
    github: "https://github.com/PedroLor1a",
    email: "pedroloria003@gmail.com"
  },
  {
    name: "Uriel Garmendia",
    image: uriel,
    linkedin: "https://www.linkedin.com/in/uriel-garmendia/",
    github: "https://github.com/UrielGarmendia",
    email: "garmendiauriel@gmail.com"
  },
  {
    name: "Joan Jaramillo",
    image:joan,
    linkedin: "https://www.linkedin.com",
    github: "https://github.com/Djoanjaramillo",
    email: "joanjaramillo17@gmail.com"
  },
  {
    name: "Kevin Calle",
    image: kevin,
    linkedin: "http://www.linkedin.com/in/kevin-calle-53935b273",
    github: "https://github.com/kevincalle3101",
    email: "kevinmendoza3101@hotmail.com"
  }
  
];


const DeveloperCard = ({ developer }) => (
  <div className={`${style.DeveloperCard} DeveloperCard`}>
    <span className={style.Name}>{developer.name}</span>
    <img src={developer.image} alt={developer.name} />
    <div className={style.Icons}>
      <a href={developer.linkedin} target="_blank" rel="noreferrer">
        <LinkedIn />
      </a>
      <a href={developer.github} target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      <a href={`mailto:${developer.email}`} target="_blank" rel="noreferrer">
        <Mail />
      </a>
    </div>
  </div>
);
const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/'); 
  };

  return (
    <button onClick={goBack} className={style.GoBackButton}>
      Volver 
    </button>
  );
};

const DeveloperTeam = () => {
  const cardsPerRow = 4; 
  const cardGroups = [];

  for (let i = 0; i < developers.length; i += cardsPerRow) {
    const group = developers.slice(i, i + cardsPerRow);
    cardGroups.push(group);
  }

  return (
    <div className={style.Developer}>
     
      <h3>Developer Team</h3>
      
      <div className={style.CardGroup}>
        {cardGroups.map((group, index) => (
          <div key={index} className={style.Row}>
            {group.map((developer, idx) => (
              <DeveloperCard key={idx} developer={developer} />
            ))}
          </div>
        ))}
        <GoBackButton /> {}
      </div>
    </div>
  );
};

export default DeveloperTeam;

