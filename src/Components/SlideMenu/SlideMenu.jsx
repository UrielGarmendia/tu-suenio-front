import React, { useState } from "react";
import styles from "./SlideMenu.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate } from "react-router-dom";

export const SlideMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth0();
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  const menuClassName = isOpen ? `${styles.containerMenu} ${styles.open}` : styles.containerMenu;
  return (
    <div className={styles.principalContainer}>
          <img onClick={openMenu} className={styles.img} src={user.picture} alt={user.name} />
            <div className={menuClassName}>
              <div className={styles.containerHeader}>
                <div className={styles.subContainerHeader}>
                  <img className={styles.imgMenu} src={user.picture} alt={user.name} />
                  <h4 className={styles.nameMenu}>{user.name}</h4>
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
                    <ArrowForwardIosIcon className={styles.arrowIcon} sx={{ fontSize: 18 }}/>
                  </h3>
                </a>
                <a href="#" className={styles.menuLink} onClick={() => logout({logoutParams: { returnTo: window.location.origin }})}>
                  <div className={styles.containerIcon}>
                    <LogoutIcon />
                  </div>
                  <p className={styles.menuLinkP}>Cerrar Sesión</p>
                  <h3 className={styles.containerIconArrow}>
                    <ArrowForwardIosIcon className={styles.arrowIcon} sx={{ fontSize: 18 }}/>
                  </h3>
                </a>
              </div>
            </div>
    </div>
  );
};
export default SlideMenu;
