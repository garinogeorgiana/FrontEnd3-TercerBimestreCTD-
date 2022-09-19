import React, { Component } from "react"

/* no hacer paso de informacion mas alla de abuelo->padre->hijo, por que es mala practica. */
//en react la informacion viaja unidireccionalmente. Podemos ejecutar metodos de la clase desde el hijo, en el siguiente ejemplo
// ejecuto un setState desde el hijo.
export default class Padre extends Component {
  state = {
    contador: 0,
  }

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  render() {
    return (
      <>
        <h2>Comunicacion entre Componentes</h2>
        <p>Soy el contador state del padre: <b>{this.state.contador}</b></p>
        <Hijo mensaje="Soy el hijo 1" incrementarContador={this.incrementarContador} />
        <Hijo mensaje="Soy el hijo 2" incrementarContador={this.incrementarContador} />
      </>
    )
  }
}

// A esta funcion la llamamos y le mandamos por props una referencia a la invocacion del metodo de clase, 
// el cual se desata con un evento del propio hijo.
// el cambio en el estado de esta clase puede observarse con el react tools inspeccionando al padre.
function Hijo(props) {
  return (
    <>
      <h2>{props.mensaje}</h2>
      <button onClick={props.incrementarContador}>+</button>
    </>
  )
}