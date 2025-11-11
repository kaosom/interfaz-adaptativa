import React, { useState } from 'react';
import './InterfazEstresante.css';

const InterfazEstresante = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    pais: '',
    fechaNacimiento: '',
    genero: '',
    ocupacion: '',
    ingresos: '',
    referencias: '',
    comentarios: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="interfaz-estresante">
      <header className="header-estresante">
        <h1 className="titulo-estresante">FORMULARIO DE REGISTRO COMPLETO</h1>
        <p className="subtitulo-estresante">Complete todos los campos obligatorios marcados con asterisco (*)</p>
      </header>
      
      <div className="contenido-estresante">
        <div className="texto-largo">
          <h2>INFORMACIÓN IMPORTANTE SOBRE EL REGISTRO</h2>
          <p>
            Este formulario requiere que proporcione información detallada sobre su persona, 
            incluyendo datos personales, de contacto, financieros y de referencia. 
            Todos los campos son obligatorios y deben ser completados con precisión. 
            Cualquier error o información incompleta resultará en el rechazo de su solicitud. 
            Por favor, lea cuidadosamente cada sección antes de proceder. 
            Tenga en cuenta que este proceso puede tomar varios minutos y requiere 
            atención constante a los detalles. Asegúrese de tener a mano todos los 
            documentos necesarios antes de comenzar.
          </p>
          <p>
            Además, es importante mencionar que la información proporcionada será 
            verificada mediante diversos métodos de autenticación. Esto incluye 
            verificaciones de identidad, validación de datos financieros y 
            comprobación de referencias. El proceso de verificación puede tomar 
            entre 5 y 10 días hábiles. Durante este período, no podrá realizar 
            modificaciones a su solicitud. Si tiene alguna pregunta o necesita 
            asistencia, puede contactarnos a través de nuestro servicio de atención 
            al cliente, disponible de lunes a viernes de 9:00 AM a 6:00 PM.
          </p>
        </div>

        <form className="formulario-estresante">
          <div className="grupo-campos">
            <div className="campo">
              <label htmlFor="nombre">Nombre *</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="apellido">Apellido *</label>
              <input 
                type="text" 
                id="apellido" 
                name="apellido" 
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grupo-campos">
            <div className="campo">
              <label htmlFor="email">Correo Electrónico *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="telefono">Teléfono *</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="campo">
            <label htmlFor="direccion">Dirección Completa *</label>
            <input 
              type="text" 
              id="direccion" 
              name="direccion" 
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-campos">
            <div className="campo">
              <label htmlFor="ciudad">Ciudad *</label>
              <input 
                type="text" 
                id="ciudad" 
                name="ciudad" 
                value={formData.ciudad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="codigoPostal">Código Postal *</label>
              <input 
                type="text" 
                id="codigoPostal" 
                name="codigoPostal" 
                value={formData.codigoPostal}
                onChange={handleChange}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="pais">País *</label>
              <input 
                type="text" 
                id="pais" 
                name="pais" 
                value={formData.pais}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grupo-campos">
            <div className="campo">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
              <input 
                type="date" 
                id="fechaNacimiento" 
                name="fechaNacimiento" 
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="genero">Género *</label>
              <select 
                id="genero" 
                name="genero" 
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione...</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
                <option value="prefiero-no-decir">Prefiero no decir</option>
              </select>
            </div>
          </div>

          <div className="grupo-campos">
            <div className="campo">
              <label htmlFor="ocupacion">Ocupación *</label>
              <input 
                type="text" 
                id="ocupacion" 
                name="ocupacion" 
                value={formData.ocupacion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="ingresos">Ingresos Mensuales *</label>
              <input 
                type="text" 
                id="ingresos" 
                name="ingresos" 
                value={formData.ingresos}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="campo">
            <label htmlFor="referencias">Referencias Personales *</label>
            <textarea 
              id="referencias" 
              name="referencias" 
              value={formData.referencias}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="comentarios">Comentarios Adicionales *</label>
            <textarea 
              id="comentarios" 
              name="comentarios" 
              value={formData.comentarios}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <div className="botones-formulario">
            <button type="submit" className="boton-enviar">ENVIAR FORMULARIO</button>
            <button type="button" className="boton-cancelar">CANCELAR</button>
            <button type="button" className="boton-guardar">GUARDAR BORRADOR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterfazEstresante;

