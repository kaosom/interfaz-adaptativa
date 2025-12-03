import React, { useState } from 'react';
import './AvisoDeEstres.css';
import InterfazAdaptada from './InterfazAdaptada';

const AvisoDeEstres = () => {
  const [mostrarAviso, setMostrarAviso] = useState(true);

  const handleContinue = () => {
    setMostrarAviso(false);
  };

  if (!mostrarAviso) {
    return <InterfazAdaptada />;
  }

  return (
    <div className="aviso-estres">
      <div className="contenedor-aviso">
        <div className="icono-calma">
          <span role="img" aria-label="calma" style={{ fontSize: '48px' }}>
            🧘‍♀️
          </span>
        </div>
        <h1 className="titulo-aviso">Tómate un respiro</h1>
        <p className="mensaje-aviso">
          Hemos detectado que podrías estar experimentando estrés. Para ayudarte,
          hemos simplificado esta página. Respira profundo y avanza cuando te
          sientas listo.
        </p>
        <div className="accion-principal">
          <button className="boton-principal" onClick={handleContinue}>
            Continuar
          </button>
        </div>
        <div className="sugerencias">
          <p className="texto-sugerencia">
            Consejo: da un pequeño paseo o realiza una pausa de unos minutos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvisoDeEstres;