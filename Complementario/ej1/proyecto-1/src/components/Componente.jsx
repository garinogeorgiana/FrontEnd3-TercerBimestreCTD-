//Creamos un componente basado en clases.

//extraemos el objeto componente de de react 
import React, {Component} from "react";

//usamos la palabra reservada class y le decimos que el Componente (este archivo), extienda de react
// esta desestructurado, si no hubiesemos extraido el objeto component en la linea 4, tendriamos que usarlo con React.Component.
class Componente extends Component{
    // un componente de clase necesita su metodo render, que le permite renderizar el codigo jsx.
    render(){
        return <h2>Hola soy un Componente</h2>
    }
}

//Exportamos el componente. si no lo ponemos con la palabra default, tendremos que desestructurarlo cuando lo importemos en otro lado.
export default Componente


// el codigo sin los comentarios en medio:
/* 

import React, {Component} from "react";

class Componente extends Component{ 
    render(){
        return <h2>Hola soy un Componente</h2>
    }
}

export default Componente

 */