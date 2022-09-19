import React, { Component } from 'react'
import Button from './Button'
import "./App.css";


export default class App extends Component {

  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */
  constructor(props) {
    super(props)
    this.state = {
      colors: ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]
    }
    

    this.shuffle = this.shuffle.bind(this)
  }


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

  shuffle(){
    let array = this.state.colors
    let shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    let posicion = Math.floor(Math.random() * this.state.colors.length)
    this.setState({
      colors:shuffledArray,
      electedColor: this.state.colors[posicion]
    })
    
  }
  /* shuffle() {
    let posicion = Math.floor(Math.random() * this.state.colors.length)+1
    this.setState(
      { selectedColor: this.state.colors[posicion] }
    )
    alert(this.state.selectedColor)
  } */

  
  render() {
    return (
      
      <div className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
        <h2 style={{color:"white"}}>Color random: {this.state.electedColor} </h2>
      </div>

    )
  }
}
