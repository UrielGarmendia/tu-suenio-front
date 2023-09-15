
import { Link } from 'react-router-dom';
import style from '../Footer/Footer.module.css'
import logo from '../../Assents/logoPrincipal.png'
import facebook from '../../Assents/Facebook.png'
import instagram from '../../Assents/Instagram.png'
import tiktok from '../../Assents/Tiktok.png'
import whatsapp from '../../Assents/WhatsApp.png'

function Footer() {
  return (
    <footer className={style.footer}>
    <div className={style.logoInf}><img src={logo} alt="" />
    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2></div>
    <div className={style.redesDiv}>
        <div className={style.redes}>
            <a href='https://www.facebook.com'><img src={facebook} href='' alt="" /></a>
            <a href='https://www.instagram.com'><img src={instagram} href='' alt="" /></a>
            <a href='https://www.tiktok.com'><img src={tiktok} href='' alt="" /></a>
            <a href='https://www.whatsapp.com'><img src={whatsapp} href='' alt="" /></a>
        </div>
    </div>
    <div className={style.informacion}><h3>Contáctenos</h3>
      <h4>Dirección: <span> Av Central n°123</span></h4>
      <h4>Telefono: <span> 999999999</span></h4>
      <h4>Email: <span> tusueño@gmail.com</span></h4>
    </div>
  </footer>
  );
};

export default Footer;