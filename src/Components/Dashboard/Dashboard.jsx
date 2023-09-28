import style from '../Dashboard/Dashboard.module.css'
import { Add, ManageAccounts, PointOfSale, Settings, TrendingFlat, TrendingUpOutlined } from '@mui/icons-material';
import Estadisticas from "../Estadisticas/Estadisticas";
import Create from "../Create/Create"
import ProductosAdminActu from "../ProductosAdminActu/ProductosAdminActu"
import { useState } from 'react';
import ProductosAdmin from '../ProductosAdmin/ProductosAdmin';
import ReporteVentas from '../ReporteVentas/ReporteVentas'

const Dashboard = () => {

  const [activeButton, setActiveButton] = useState('Estadisticas')

    return (
    <div className={style.dashboard}>
      <section>
        <ul>
          <li><p><Add></Add>PRODUCTOS</p>
            <ul>
              <li onClick={()=>setActiveButton('ActProducto')}><p>ACTUALIZAR PRODUCTO</p></li>
              <li onClick={()=>setActiveButton('Productos')}><p>CREAR PRODUCTO</p></li>
              <li onClick={()=>setActiveButton('ElProducto')}><p>ELIMINAR PRODUCTO</p></li>
            </ul>
          </li>
          <li onClick={()=>setActiveButton('RepVentas')}><p><PointOfSale></PointOfSale>REPORTE DE VENTAS</p></li>
          <li onClick={()=>setActiveButton('Estadisticas')}><p><TrendingUpOutlined></TrendingUpOutlined>ESTADÍSTICAS</p></li>
          <li onClick={()=>setActiveButton('UserReg')}><p><ManageAccounts></ManageAccounts>USUARIOS REGISTRADOS</p></li>
          <li onClick={()=>setActiveButton('Config')}><p><Settings></Settings>CONFIGURACIÓN DE PERFIL</p></li>
        </ul>
      </section>
      <div className={style.container}>
      {activeButton === 'Estadisticas' && ( <Estadisticas/>)}
      {activeButton === 'Productos' && (<Create/>)}
      {activeButton === 'ActProducto' && (<ProductosAdminActu/>)}
      {activeButton === 'ElProducto' && (<ProductosAdmin/>)}
      {activeButton === 'RepVentas' && (<ReporteVentas/>)}
      {activeButton === 'UserReg' && (<h1>Aqui ira la seccion USUARIOS REGISTRADOS</h1>)}
      {activeButton === 'Config' && (<h1>Aqui ira la seccion de CONFIGURACION DEL ADMIN</h1>)}
      <article>
     
      </article>
     
      </div>

    </div>
  );
};

export default Dashboard;
