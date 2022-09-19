import React, { Component } from "react";
//Eventos Nativos, Sinteticos & Personalizados.

function Boton(props) {
    /* el evento va en este boton nativo de js, que dispara el evento personalizado */
    return(<button onClick={props.myOnClick} >Boton hecho componente {props.texto}</button>)
}


export default class MasSobreEventos extends Component {
    handleClick = (e,mensaje) =>{
        // Este no es el evento nativo de JS, si no el evento nativo 
        // soportado por la capa que recubre react llamada SyntheticEvent.
        // no todos los eventos estan soportados, pero si la mayoria (los mas usados).
        // https://es.reactjs.org/docs/events.html      
        console.log(e)
        console.log(e.target)

        // Para acceder al evento nativo de JS tenemos que usar otras palabras reservadas Ej:
        console.log(e.nativeEvent.target)
        console.log(e.nativeEvent)

        console.log(mensaje)
    }

    

    render() {
        return (
            <div>
                <h2>Mas sobre Eventos.</h2>
                {/* Si ponemos un arrow function antes de la llamada a la funcion dentro del evento, esa arrow function se convierte
                en la manejadora del evento, con lo cual el evento "e" sera capturado por esta, no por handleClick. 
                De no hacerlo de esta forma, el paso de argumentos sera null.*/}
                <button onClick={(e)=>this.handleClick(e,"Hola, pasando parametro desde un evento.")}>Podes ver el evento en consola despues de presionarme</button>
                <br/>

                {/* En este evento no se mostrara nada por consola, por que no es una etiqueta JSX, es un elemento o componente personalizado que creamos. 
                Para poder hacer uso de este evento, tenemos que usar lo que se conoce en React como evento personalizado.
                Lo que es crear una prop que se la pasamos al componente y esa prop se la asignamos al evento con el que estemos trabajando */}
                <Boton onClick={(e)=>this.handleClick(e,"Hola, pasando parametro desde un evento.")}/>
                <br/>
                {/* ejemplo funcionando. */}
                <Boton texto="Soy de React" myOnClick={(e)=>this.handleClick(e,"Hola, pasando parametro desde un evento.")}/>
                <br/>
            </div>
        )
    }
}
