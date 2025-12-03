import React, { useState } from 'react';
import './InterfazAdaptada.css';

const InterfazAdaptada = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '',
    ciudad: '',
    ocupacion: '',
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias! Su información básica ha sido enviada.');
  };

  return (
    <div className="interfaz-adaptada">
      <div className="contenedor-adaptada">
        <h1 className="titulo-adaptada">Información Básica</h1>
        <p className="mensaje-adaptada">
          Hemos simplificado este formulario para facilitar su llenado. Introduce
          sólo la información esencial.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="campo-simplificado">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={datos.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo-simplificado">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={datos.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo-simplificado">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={datos.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo-simplificado">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="date"
              value={datos.fechaNacimiento}
              onChange={handleChange}
            />
          </div>
          <div className="campo-simplificado">
            <label htmlFor="genero">Género</label>
            <select
              id="genero"
              name="genero"
              value={datos.genero}
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
              <option value="prefiero-no-decir">Prefiero no decir</option>
            </select>
          </div>
          <div className="campo-simplificado">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              id="ciudad"
              name="ciudad"
              type="text"
              value={datos.ciudad}
              onChange={handleChange}
            />
          </div>
          <div className="campo-simplificado">
            <label htmlFor="ocupacion">Ocupación</label>
            <input
              id="ocupacion"
              name="ocupacion"
              type="text"
              value={datos.ocupacion}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="boton-enviar-simplificado">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterfazAdaptada;