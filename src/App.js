import React, { useState } from 'react';
import './App.css';
import InterfazEstresante from './components/InterfazEstresante';
import InterfazAdaptada from './components/InterfazAdaptada';
import { useDeteccionEstres } from './hooks/useDeteccionEstres';

function App() {
  const [esEstresado, setEsEstresado] = useState(false);

  useDeteccionEstres(setEsEstresado);

  return (
    <div className="App">
      {esEstresado ? <InterfazAdaptada /> : <InterfazEstresante />}
    </div>
  );
}

export default App;
