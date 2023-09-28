import React, { useState } from 'react';
import style from '../Contactanos/Contactanos.module.css'
import logo from '../../Assents/logoPrincipal.png'

function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    consulta: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'nombre') {
      const regex = /^[a-zA-Z\s]*$/; 
      if (!regex.test(value)) {
        setErrors({
          ...errors,
          nombre: 'El nombre solo debe contener letras y espacios.',
        });
      } else {
        setErrors({
          ...errors,
          nombre: '',
        });
      }
    }

    if (name === 'email') {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!regex.test(value)) {
        setErrors({
          ...errors,
          email: 'Ingresa un correo electrónico válido.',
        });
      } else {
        setErrors({
          ...errors,
          email: '',
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (formData.nombre && formData.email && formData.consulta) {
        setFormData({
            nombre: '',
            email: '',
            consulta: '',
        })
        console.log(formData);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  };

  return (
    <div className={style.contactanos}>
        <img src={logo} alt="" />
      <h1>Contáctanos</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder='Tu nombre'
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && <p className={style.error}>{errors.nombre}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Tu correo electrónico'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="consulta">Consulta:</label>
          <textarea
            id="consulta"
            name="consulta"
            placeholder='¿Cómo te podemos ayudar?'
            value={formData.consulta}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Contactanos;
