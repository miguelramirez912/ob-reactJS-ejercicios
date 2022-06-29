import ComponenteB from "./componente_b";
import PropTypes from 'prop-types';
import { Contacto } from "../models/contacto.class";


const ComponenteA = ({contacto}) => {

    return (
        <div>
            <h1>Contacto:</h1>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <p>Email: {contacto.email}</p>
            <ComponenteB estado={true}/>
        </div>
    )

}

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}
export default ComponenteA;