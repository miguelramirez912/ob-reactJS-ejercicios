import { useRef, useState } from "react";
import Cuadrado from "../pure/cuadrado";


const Container = () => {

    const [colors, setColors] = useState([0, 0, 0])

    let estilos = {
        width: '255px',
        height: '255px',
        backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
    }

    let estilosContenedor = {
        borderRadius: '5px', 
        border: '1px solid black', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        padding: '15px',
        margin: '10px', 
        backgroundColor: 'aliceblue'
    }

    let miIntervalo = useRef(null);
    
    const cambiarColorF = () => {
        
            miIntervalo.current = setInterval(() => {
                setColors([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);    
            }, 1000);
    }

    const stopCambiarColor = () => {
        console.log("deteniendo el cambio");
        clearInterval(miIntervalo.current);
        
    }

    return(
        <div 
            style={estilosContenedor}
            onMouseEnter={cambiarColorF}
            onMouseOut={stopCambiarColor}
            onDoubleClick={stopCambiarColor}
        >
            <h1>Contenedor</h1>
            <Cuadrado style={estilos}/>
        </div>
    )
}

export default Container;