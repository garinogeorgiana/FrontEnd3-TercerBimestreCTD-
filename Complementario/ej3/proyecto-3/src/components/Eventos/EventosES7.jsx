import React, { Component } from "react";

//Properties Initializer
export default class EventosES7 extends Component {
    state = {
        contador: 0,
    }

    //Arrow function y guardamos la funcion en una variable.
    sumar = (e) => {
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }
    //Arrow function y guardamos la funcion en una variable.
    restar = (e) => {
        console.log("Restando")
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    /* eliminando el constructor, el this dentro de las funciones hace 
    referencia al state directamente ya que no esta mas confinado a un 
    bloque de codigo dentro de constructor. Por tal, no necesitamos bindearlo. */



    render() {
        return (
            <div>
                <h2>Eventos en componentes de Clase De ECMAScript 7 </h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>Contador de evento: {this.state.contador}</h3>
            </div>
        )
    }
}