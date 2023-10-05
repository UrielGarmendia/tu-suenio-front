import style from "../Footer/Footer.module.css";
import logo from "../../Assents/logoPrincipal.png";
import facebook from "../../Assents/Facebook.png";
import instagram from "../../Assents/Instagram.png";
import tiktok from "../../Assents/Tiktok.png";
import whatsapp from "../../Assents/WhatsApp.png";
import { Mail, PinDrop, Phone } from "@mui/icons-material";
import DeveloperTeam from "../DeveloperTeam/DeveloperTeam";

function Footer() {
  return (
    <footer className={style.footer}>
      <section>
        <div className={style.logoInf}>
          <img src={logo} alt="" />
        </div>
        <div className={style.redesDiv}>
          <div className={style.redes}>
            <h4>Síguenos en:</h4>
            <div className={style.redesIconos}>
              <a
                href="https://www.facebook.com/tusuen022?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} href="" alt="" />
              </a>
              <a
                href="https://instagram.com/tusueno_alcancias?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} href="" alt="" />
              </a>
              <a
                href="https://www.tiktok.com/@tusueno_alcancias?_t=8fnuNRUl9fi&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tiktok} href="" alt="" />
              </a>
              <a
                href="https://wa.me/message/TNARBJHH3ZXGJ1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} href="" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={style.informacion}>
          <h3>Contáctenos:</h3>
          <h4>
            <PinDrop></PinDrop>Dirección: <span> Cali, Colombia</span>
          </h4>
          <h4>
            <Phone></Phone>Telefono: <span> +57 300 4464509</span>
          </h4>
          <h4>
            <Mail></Mail>Email: <span> tusueno022@gmail.com</span>
          </h4>
        </div>
        {/* <DeveloperTeam/> */}
      </section>
      <h2>©2023, Tu Sueño </h2>
    </footer>
  );
}

export default Footer;
