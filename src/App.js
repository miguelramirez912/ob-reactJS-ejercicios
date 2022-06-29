import './App.css';
import ComponenteA from './components/componente_a';
import { Contacto } from './models/contacto.class';

function App() {
  const ejemploContacto = new Contacto('Juan', 'Perez', 'jPerez@correo.com', true);

  return (
    <div className="App">
      <ComponenteA contacto={ejemploContacto}/>
    </div>
  );
}

export default App;
