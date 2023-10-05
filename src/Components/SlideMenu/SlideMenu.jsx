import React, { useState, useEffect } from "react";
import styles from "./SlideMenu.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import Crow from "../../Assents/crown.png";

export const SlideMenu = ({ infoUser }) => {
  const { logout, user } = useAuth0();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  const menuClassName = isOpen ? `${styles.containerMenu} ${styles.open}` : styles.containerMenu;
  return (
    <div className={styles.principalContainer}>
      <div className={styles.containerLogo}>
        {infoUser && infoUser.isAdmin &&
        <img className={styles.imgLogo} src={Crow} alt="Logo" />
      }
        <img onClick={openMenu} className={styles.img} src={infoUser ? infoUser.image : user.picture} alt={user.name} />
      </div>
      <div className={menuClassName}>
        <div className={styles.containerHeader}>
          <div className={styles.subContainerHeader}>
            <img className={styles.imgMenu} src={infoUser ? infoUser.image : user.picture} alt={user.name} />
            <h4 className={styles.nameMenu}>{`${infoUser ? infoUser.name : user.nickname} ${infoUser?.lastName}`}</h4>
          </div>
          <hr className={styles.hrMenu} />
        </div>
        <div className={styles.containerBody}>
          <a href="#" className={styles.menuLink} onClick={() => navigate("/profile")}>
            <div className={styles.containerIcon}>
              <SettingsIcon />
            </div>
            <p className={styles.menuLinkP}>Configurar Perfil</p>
            <h3 className={styles.containerIconArrow}>
              <ArrowForwardIosIcon className={styles.arrowIcon} sx={{ fontSize: 18 }} />
            </h3>
          </a>
          <a href="#" className={styles.menuLink} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <div className={styles.containerIcon}>
              <LogoutIcon />
            </div>
            <p className={styles.menuLinkP}>Cerrar Sesión</p>
            <h3 className={styles.containerIconArrow}>
              <ArrowForwardIosIcon className={styles.arrowIcon} sx={{ fontSize: 18 }} />
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SlideMenu;
