import style from "../NavBar/NavBar.module.css";
import logo from "../../Assents/logoPrincipal.png";
import SettingsIcon from "@mui/icons-material/Settings";
import logoUser from "../../Assents/logoUser.png";
import carrito from "../../Assents/carrito.png";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { allAlcancias } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import SlideMenu from "../SlideMenu/SlideMenu";
import { useLocation } from "react-router-dom";

const NavBar = ({infoUser}) => {
  const location = useLocation();
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.CartShopping);

  const handleClick = () => {
    dispatch(allAlcancias());
  };

  return (
    <div className={style.navBar}>
      <div>
        <img src={logo} alt="logo" height="100px" className={style.img} />
      </div>
      <SearchBar />
      <div className={style.botones}>
          <Link to="/">
            <button className={style.button}>INICIO</button>
          </Link>
          <Link to="/alcancias">
            <button className={style.button} onClick={handleClick}>ALCANCIAS</button>
          </Link>
          <Link to="/about">
          <button className={style.button}>EMPRESA</button>
          </Link>
          <Link to='/contactanos'>
            <button className={style.button}>CONTACTANOS</button>
          </Link>
      </div>
      <div className={style.signin}>
        <Link to="/carrito">
          <div className={style.cart_cont}>
            <img src={carrito} alt="carrito" className={style.carrito}/>
            <p className={style.cartNumber}>{Cart?.length}</p>
          </div>
        </Link>
        {
        infoUser && infoUser.isAdmin && (
          <Link to="/admin">
          <button className={style.buttonSettings}>
            <SettingsIcon></SettingsIcon>
          </button>
        </Link>
        )
      }
        {isAuthenticated ? (
          <SlideMenu  infoUser={infoUser}/>
        ) : (
          <button onClick={() => loginWithRedirect()} className={style.loginButton}>Iniciar sesion</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
