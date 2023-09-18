import { Link } from "react-router-dom";
import style from "../Footer/Footer.module.css";
import logo from "../../Assents/logoPrincipal.png";
import facebook from "../../Assents/Facebook.png";
import instagram from "../../Assents/Instagram.png";
import tiktok from "../../Assents/Tiktok.png";
import whatsapp from "../../Assents/WhatsApp.png";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logoInf}>
        <img src={logo} alt="" />
      </div>
      <div className={style.redesDiv}>
        <div className={style.redes}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} href="" alt="" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} href="" alt="" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <img src={tiktok} href="" alt="" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            <img src={whatsapp} href="" alt="" />
          </a>
        </div>
      </div>
      <div className={style.informacion}>
        <h3>Contáctenos</h3>
        <h4>
          Dirección: <span> Av Central n°123</span>
        </h4>
        <h4>
          Telefono: <span> 999999999</span>
        </h4>
        <h4>
          Email: <span> tusueño@gmail.com</span>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
