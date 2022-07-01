import './App.css';
import Clock from './components/clockF';
// import ComponenteA from './components/componente_a';
import { Contacto } from './models/contacto.class';

function App() {
  const ejemploContacto = new Contacto('Juan', 'Perez', 'jPerez@correo.com', true);

  return (
    <div className="App">
      {/* <ComponenteA contacto={ejemploContacto}/> */}
      <Clock/>
    </div>
  );
}

export default App;
