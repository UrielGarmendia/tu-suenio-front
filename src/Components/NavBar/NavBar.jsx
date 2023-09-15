import style from '../NavBar/NavBar.module.css'
import logo from '../../Assents/logoPrincipal.png'
import logoUser from '../../Assents/logoUser.png'
import carrito from '../../Assents/carrito.png'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {

    return(
      <div className={style.navBar}>
        <div><img src={logo} alt="logo" height='100px'/></div>
        <div className={style.botones}>
          <div>
            <Link to='/home'><button>INICIO</button></Link>
            <Link to='/alcancias'><button>PRODUCTOS</button></Link>        
            <button>EMPRESA</button>       
            <button>CONTACTANOS</button>
            <Link to='/create'><button>CREAR PRODUCTO</button></Link>
          </div>
        </div>
        <SearchBar/>
        <div className={style.signin}>
          <img src={carrito} alt="carrito" />
        <img src={logoUser} alt="icono user"></img>
        <button>Iniciar sesion</button>
        </div>
    </div>
   )
   }

   export default NavBar