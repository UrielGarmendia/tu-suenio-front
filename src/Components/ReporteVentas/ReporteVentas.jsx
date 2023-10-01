import React, { useState } from 'react';
import style from '../ReporteVentas/ReporteVentas.module.css'
import Modal from 'react-modal';
import * as XLSX from 'xlsx';
import { Close } from '@mui/icons-material';

const historialVentasMock = [
  {
    fechaVenta: '2023-09-27',
    numeroVenta: '001',
    nombreCliente: 'Cliente 1',
    totalPrecio: 210.00,
    detalles: [
      { producto: 'Producto A', cantidad: 2, precioUnitario: 50.00 },
      { producto: 'Producto B', cantidad: 3, precioUnitario: 20.00 },
    ],
  },

  {
    fechaVenta: '2023-09-29',
    numeroVenta: '002',
    nombreCliente: 'Cliente 2',
    totalPrecio: 150.00,
    detalles: [
      { producto: 'Producto A', cantidad: 2, precioUnitario: 50.00 },
      { producto: 'Producto B', cantidad: 3, precioUnitario: 20.00 },
    ],
  },
];

const ReporteVentas = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVenta, setSelectedVenta] = useState(null); 
  const [ventas, setVentas] = useState(historialVentasMock);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [clienteFiltro, setClienteFiltro] = useState('');

  const abrirModal = (venta) => {
    setSelectedVenta(venta);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setSelectedVenta(null);
    setModalIsOpen(false);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(ventas); // Convierte tus datos en una hoja de cálculo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reporte de Ventas'); // Agrega la hoja de cálculo al libro
  
    XLSX.writeFile(wb, 'reporte_ventas.xlsx'); // Descargar el archivo Excel con un nombre de archivo específico
  };

  const filtrarVentas = () => {
    const ventasFiltradas = historialVentasMock.filter((venta) => {
      return (
        (!fechaFiltro || venta.fechaVenta.includes(fechaFiltro)) &&
        (!clienteFiltro || venta.nombreCliente.toLowerCase().includes(clienteFiltro.toLowerCase()))
      );
    });
    setVentas(ventasFiltradas);
  };

  const limpiarFiltros = () => {
    setFechaFiltro('')
    setClienteFiltro('')
    setVentas(historialVentasMock);
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
          value={clienteFiltro}
          onChange={(e) => setClienteFiltro(e.target.value)}
        />
        <button onClick={filtrarVentas}>Buscar</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>
        <button onClick={exportToExcel}>Exportar a Excel</button>        
      </div>
      <table>
        <thead>
          <tr>
            <th>Fecha de Venta</th>
            <th>Número de Venta</th>
            <th>Nombre del Cliente</th>
            <th>Total del Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => (
            <tr key={index}>
              <td>{venta.fechaVenta}</td>
              <td>{venta.numeroVenta}</td>
              <td>{venta.nombreCliente}</td>
              <td>{venta.totalPrecio}</td>
              <td>
                <button onClick={() => abrirModal(venta)}>Ver Detalle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <p>Fecha de Venta: {selectedVenta.fechaVenta}</p>
      <p>Número de Venta: {selectedVenta.numeroVenta}</p>
      <p>Nombre del Cliente: {selectedVenta.nombreCliente}</p>
      <p>Total del Precio: {selectedVenta.totalPrecio}</p>
      <h3>Detalles:</h3>
      <ul>
        {selectedVenta.detalles.map((detalle, index) => (
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

    </div>
  );
};

export default ReporteVentas;
