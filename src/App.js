import React, { useState } from 'react';
import './App.css';
import InterfazEstresante from './components/InterfazEstresante';
import AvisoDeEstres from './components/AvisoDeEstres';
import { useDeteccionEstres } from './hooks/useDeteccionEstres';

function App() {
  const [esEstresado, setEsEstresado] = useState(false);

  useDeteccionEstres(setEsEstresado);

  return (
    <div className="App">
      {esEstresado ? <AvisoDeEstres /> : <InterfazEstresante />}
    </div>
  );
}

export default App;
