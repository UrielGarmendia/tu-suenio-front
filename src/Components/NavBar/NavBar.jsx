import style from '../NavBar/NavBar.module.css'
import logo from '../../Assents/logoPrincipal.png'
import logoUser from '../../Assents/logoUser.png'
import carrito from '../../Assents/carrito.png'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useAuth0 } from '@auth0/auth0-react'
import SlideMenu from '../SlideMenu/SlideMenu'

const NavBar = () => {

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <div className={style.navBar}>
      <div><img src={logo} alt="logo" height='100px' /></div>
      <div className={style.botones}>
        <div>
          <Link to='/'><button>INICIO</button></Link>
          <Link to='/create'><button>CREAR ALCANCIA</button></Link>
          <Link to='/alcancias'><button>ALCANCIAS</button></Link>
          <button>EMPRESA</button>
          <button>CONTACTANOS</button>
        </div>
      </div>
      <SearchBar />
      <div className={style.signin}>
        <img src={carrito} alt="carrito" />
        {isAuthenticated ?
          <SlideMenu />
          :
          <button onClick={() => loginWithRedirect()}>Iniciar sesion</button>
        }
      </div>
    </div>
  )
}

export default NavBar