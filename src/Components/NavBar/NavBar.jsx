import style from '../NavBar/NavBar.module.css'
import logo from '../../Assents/logoPrincipal.png'
import logoUser from '../../Assents/logoUser.png'
import carrito from '../../Assents/carrito.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
      <div className={style.navBar}>
        <div><img src={logo} alt="logo" height='100px'/></div>
        <div className={style.botones}>
          <div>
            <Link to='/home'><button>HOME</button></Link>
            <Link to='/alcancias'><button>ALCANCIAS</button></Link>        
            <button>ABOUT</button>       
            <button>CONTACTANOS</button>
          </div>
        </div>
        <div className={style.search}>
            <input 
            placeholder="Buscar ..." 
            type="search" />
            <button>Buscar</button>
        </div>
        <div className={style.signin}>
          <img src={carrito} alt="carrito" />
        <img src={logoUser} alt="icono user"></img>
        <button>Iniciar sesion</button>
        </div>
    </div>
   )
   }

   export default NavBar