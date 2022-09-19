import React from "react";

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.defecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                
                {/* un booleano no se renderiza, pero crea la etiqueta 
                y se puede ver el contenido desde la devs tools */}
                <li>{props.booleano}</li>
                
                {/* generemos uno que se pueda ver */}
                <li>{props.booleano ? "true":"false"}</li>
                
                {/* pasamos un arreglo */}
                <li>{props.arreglo}</li>
                <li>{props.arreglo[2]}</li>

                {/* objeto */}
                <li>{props.objeto.nombre+" || "+props.objeto.mail}</li>

                {/* pasamos un elemento react */}
                <li>{props.elementoReact}</li>

                {/* pasamos una funcion */}
                <li>{props.arreglo.map(item => props.funcion(item))}</li>
                {/* Tambien se puede escribir asi:
                <li>{props.arreglo.map(props.funcion)}</li>
                Pero veo mas claramente como lo escribi en la linea 29 */}

                {/* pasamos un componente */}
                <li>{props.componenteReact}</li>
            </ul>
        </div>

    )
}




