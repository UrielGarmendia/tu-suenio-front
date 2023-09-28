import React, { useState } from 'react';
import style from '../ReporteVentas/ReporteVentas.module.css'

const historialVentasMock = [
  {
    fechaVenta: '2023-09-27',
    numeroVenta: '001',
    nombreCliente: 'Cliente 1',
    totalPrecio: 100.00,
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
  const [ventas, setVentas] = useState(historialVentasMock);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [clienteFiltro, setClienteFiltro] = useState('');

  const filtrarVentas = () => {
    const ventasFiltradas = historialVentasMock.filter((venta) => {
      return (
        (!fechaFiltro || venta.fechaVenta.includes(fechaFiltro)) &&
        (!clienteFiltro || venta.nombreCliente.toLowerCase().includes(clienteFiltro.toLowerCase()))
      );
    });
    setVentas(ventasFiltradas);
  };

  const mostrarDetalle = (venta) => {
    
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
        <button onClick={filtrarVentas}>Filtrar</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>        
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
                <button onClick={() => mostrarDetalle(venta)}>Ver Detalle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteVentas;
