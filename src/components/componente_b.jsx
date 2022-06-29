import React, { useState } from "react";
import PropTypes from 'prop-types';

const ComponenteB = ({estado}) => {
    const [conectado, setConectado] = useState(estado);
    return(
        <div>
            <h3>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
            <button onClick={() => setConectado(!conectado)}>{conectado ? 'Desconectar' : 'Conectar'}</button>
        </div>
    )
}

ComponenteB.propTypes = {
    estado: PropTypes.bool
}

export default ComponenteB;

