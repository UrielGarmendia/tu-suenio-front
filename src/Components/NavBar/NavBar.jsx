import style from '../NavBar/NavBar.module.css'
import logo from '../../Assents/logoPrincipal.png'
import SettingsIcon from '@mui/icons-material/Settings';
import logoUser from '../../Assents/logoUser.png'
import carrito from '../../Assents/carrito.png'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch } from 'react-redux'
import { allAlcancias } from '../../redux/actions'
import { useAuth0 } from '@auth0/auth0-react'
import SlideMenu from '../SlideMenu/SlideMenu'

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(allAlcancias());
  }

  return (
    <div className={style.navBar}>
      <div><img src={logo} alt="logo" height='100px' className={style.img} /></div>
      <div className={style.botones}>
        <div className={style.links}>
          <Link to='/'><button>INICIO</button></Link>
          <Link to='/create'><button>CREAR ALCANCIA</button></Link>
          <Link to='/alcancias'><button onClick={handleClick}>ALCANCIAS</button></Link>
          <button>EMPRESA</button>
          <button>CONTACTANOS</button>
        </div>
      </div>
      <SearchBar />
      <div className={style.signin}>
        <Link to="/carrito"><img src={carrito} alt="carrito" /></Link>
        {isAuthenticated ?
          <SlideMenu />
          :
          <button onClick={() => loginWithRedirect()}>Iniciar sesion</button>
        }
        <Link to='/admin'><button><SettingsIcon></SettingsIcon></button></Link>
      </div>
    </div>
  )
}

export default NavBar