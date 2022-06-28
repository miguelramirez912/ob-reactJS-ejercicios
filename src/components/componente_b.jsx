import React from "react";
import PropTypes from 'prop-types';
import { Contacto } from "../models/contacto.class";

const ComponenteB = ({contacto}) => {
    return(
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <p>Email: {contacto.email}</p>
            <p>Estado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
        </div>
    )
}

// eslint-disable-next-line
ComponenteB.PropTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB;

