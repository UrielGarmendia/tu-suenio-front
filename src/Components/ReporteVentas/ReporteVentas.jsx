import React, { useState } from 'react';
import style from '../ReporteVentas/ReporteVentas.module.css'
import Modal from 'react-modal';
import * as XLSX from 'xlsx';
import { Close } from '@mui/icons-material';
import { getOrders, getUsers } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ReporteVentas = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVenta, setSelectedVenta] = useState(null); 
  const ordenes = useSelector((state)=>state.orders)
  const users = useSelector((state)=>state.allUsers)
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [clienteFiltro, setClienteFiltro] = useState('');
  const [modalModificarIsOpen, setModalModificarIsOpen] = useState(false);
  const [ventasData, setVentasData] = useState([]);
  const dispatch = useDispatch()
  const userIdToNameMap = {};

  useEffect(() => {
    dispatch(getOrders());
    dispatch(getUsers())
  }, []);

  
  users.forEach((user) => {
    userIdToNameMap[user.id] = `${user.name} ${user.lastName}`; 
  });
  const ordenesActualizado = ordenes.map((venta) => ({
    ...venta,
    nombreCliente: userIdToNameMap[venta.UserId],
    createdAt: venta.createdAt.split('T')[0]
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ordenesActualizado.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(()=>{
    setVentasData(currentItems)
  }, [ordenes, users, currentPage])
  
  const [ventaAEditar, setVentaAEditar] = useState(ordenesActualizado);

  const abrirModal = (venta) => {
    setSelectedVenta(venta);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setSelectedVenta(null);
    setModalIsOpen(false);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(ordenesActualizado); // Convierte tus datos en una hoja de cálculo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reporte de Ventas'); // Agrega la hoja de cálculo al libro
  
    XLSX.writeFile(wb, 'reporte_ventas.xlsx'); // Descargar el archivo Excel con un nombre de archivo específico
  };

  const filtrarVentas = () => {
    const ventasFiltradas = ordenesActualizado.filter((venta) => {
      const fecha = venta.createdAt.split('T')[0]
      const nombreClient = venta.nombreCliente?.toString().toLowerCase()
      return (
        (!fechaFiltro || fecha.includes(fechaFiltro)) &&
        (!clienteFiltro || nombreClient?.includes(clienteFiltro.toLowerCase()))
        );
      });
    setVentasData(ventasFiltradas.slice(indexOfFirstItem, indexOfLastItem));
  };

  const limpiarFiltros = () => {
    setFechaFiltro('')
    setClienteFiltro('')
    setVentasData(currentItems);
  };

  const abrirModalAct = (venta, editar = false) => {
  setVentaAEditar(venta);
  setModalModificarIsOpen(true);

  };

  const cerrarModalModificar = () => {
    setModalModificarIsOpen(false);
  };
  
  const handleChangeCampo = (e) => {
    const {name, value} = e.target
    setVentaAEditar({
      ...ventaAEditar,
      [name]: value, 
    });
  };
  
  const guardarCambiosVenta = ( ) => {
    cerrarModalModificar();
    setVentaAEditar({})
  };
  
  const goToNextPage = () => {
    if (currentPage < Math.ceil(ordenesActualizado.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
      filtrarVentas(); 
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      filtrarVentas(); 
    }
  };

  return (
    <div className={style.historialVentas}>
      <h1>Historial de Ventas</h1>
      <div className={style.filtros}>
        <input
          type="date"
          value={fechaFiltro}
          onChange={(e) => setFechaFiltro(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por cliente"
          onKeyDown={filtrarVentas}
          value={clienteFiltro}
          onChange={(e) => setClienteFiltro(e.target.value)}
        />
        <button onClick={filtrarVentas}>Buscar</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>
        <button onClick={exportToExcel} className={style.botonExcel}>Exportar a Excel</button>        
      </div>
      <table>
        <thead>
          <tr>
            <th>Fecha de Venta</th>
            <th>Número de Venta</th>
            <th>Nombre del Cliente</th>
            <th>Total del Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventasData?.map((venta) => (
            <tr key={venta.id}>
              <td>{venta.updatedAt.split('T')[0]}</td>
              <td>{venta.id}</td>
              <td>{venta.nombreCliente}</td>
              <td>$ {venta.totalprice}</td>
              <td>{venta.status}</td>
              <td>
                <button onClick={() => abrirModal(venta)}>Ver Detalle</button>
                <button style={{background: '#2e20c6'}}  onClick={() => abrirModalAct(venta, true)}>Modificar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={style.pagination}>
  <button onClick={goToPrevPage} disabled={currentPage === 1}>
    Anterior
  </button>
  <button
    onClick={goToNextPage}
    disabled={currentPage === Math.ceil(ordenesActualizado.length / itemsPerPage)}
  >
    Siguiente
  </button>
</div>
  <Modal
  isOpen={modalIsOpen}
  onRequestClose={cerrarModal}
  className={style.modal}
  overlayClassName={style.overlay}
  >
  {selectedVenta && (
    <div>
      <button onClick={cerrarModal}><Close/></button>
      <h2>Detalle de Venta</h2>
      <p>Fecha de Venta: {selectedVenta.createdAt}</p>
      <p>Número de Venta: {selectedVenta.id}</p>
      <p>Nombre del Cliente: {selectedVenta.UserId}</p>
      <p>Total del Precio: {selectedVenta.totalprice}</p>
      <h3>Detalles:</h3>
      <ul>
        {selectedVenta.detalles?.map((detalle, index) => (
          <li key={index}>
            <span>Producto: <label>{detalle.producto}</label> </span> 
            <span>Cantidad: <label> {detalle.cantidad}</label></span>
            <span>Precio Unitario: <label>{detalle.precioUnitario}</label> </span>
          </li>
        ))}
      </ul>
    </div>
  )}
</Modal>
<Modal
  isOpen={modalModificarIsOpen}
  onRequestClose={cerrarModalModificar}
  className={style.modal}
  overlayClassName={style.overlay}
>
  {ventaAEditar && (
    <div>
      <button onClick={cerrarModalModificar}><Close /></button>
      <h2>Editar Orden de Venta</h2>
      <div>
        <span> Fecha</span>
        <input
          type="date"
          name='createdAt'
          value={ventaAEditar.createdAt} 
          onChange={(e) => handleChangeCampo(e)}
        />
        <span> Nombre</span>
        <input
          type="text"
          value={ventaAEditar.nombreCliente} 
          name='nombreCliente'
          onChange={(e) => handleChangeCampo(e)}
        />
        <span>Precio Total</span>
        <input
          type="number"
          name='totalprice'
          value={ventaAEditar.totalprice} 
          onChange={(e) => handleChangeCampo(e)}
        />
        <span>Estado</span>
        <input
          type="text"
          name='status'
          value={ventaAEditar.status} 
          onChange={(e) => handleChangeCampo(e)}
        />
        <button onClick={guardarCambiosVenta}>Guardar Cambios</button>
      </div>
    </div>
  )}
</Modal>

    </div>
  );
};

export default ReporteVentas;
