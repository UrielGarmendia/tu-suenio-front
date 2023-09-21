import style from '../Dashboard/Dashboard.module.css'
import { Add, ManageAccounts, PointOfSale, Settings, TrendingFlat, TrendingUpOutlined } from '@mui/icons-material';
import Estadisticas from "../Estadisticas/Estadisticas";
import Create from "../Create/Create"
import { useState } from 'react';

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
      {activeButton === 'ActProducto' && (<h1>Aqui ira la seccion de Actualizar productos</h1>)}
      {activeButton === 'ElProducto' && (<h1>Aqui ira la seccion de PRODUCTOS A ELIMINAR</h1>)}
      {activeButton === 'RepVentas' && (<h1>Aqui ira la seccion REPORTE DE VENTAS</h1>)}
      {activeButton === 'UserReg' && (<h1>Aqui ira la seccion USUARIOS REGISTRADOS</h1>)}
      {activeButton === 'Config' && (<h1>Aqui ira la seccion de CONFIGURACION DEL ADMIN</h1>)}
      <article>
       <h1>ALGUN OTRO COMPONENTE PODRIA IR ACA</h1>
      </article>
     
      </div>

    </div>
  );
};

export default Dashboard;
