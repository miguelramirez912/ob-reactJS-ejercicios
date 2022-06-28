import { Contacto } from "../models/contacto.class";
import ComponenteB from "./componente_b";


const ComponenteA = () => {
    const ejemploContacto = new Contacto('Juan', 'Perez', 'jPerez@correo.com', true);

    return (
        <div>
            <h1>Contacto:</h1>
            <ComponenteB contacto={ejemploContacto}/>
        </div>
    )

}

export default ComponenteA;