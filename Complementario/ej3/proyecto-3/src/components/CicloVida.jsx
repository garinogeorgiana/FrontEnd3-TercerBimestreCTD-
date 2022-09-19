import React, { Component } from "react";

//ver la consola para entender el ciclo de vida junto con este codigo.

class Reloj extends Component {
  constructor(props) {
    super(props)
  }

  //para ver este paso en el ciclo de vida, hay que detener el reloj (remover el reloj del DOM)
  componentWillUnmount() {
    /* console.log(3, "El componente ha sido eliminado del DOM") */
  }

  //este reloj no existira hasta que se cumpla la condicion que hay en el render.
  render() {
    return <h3>{this.props.hora}</h3>
  }

}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
/*     console.log(0, "El componente se inicializa, aun NO esta en el DOM.");
 */
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible:false ,
    }
 
    this.temporizador = null;
  }

  componentDidMount() {
/*     console.log(1, "El componente ya se encuentra en el DOM") */
  }
  componentDidUpdate(prevProps, prevState) {
    /* console.log(2, "El estado o las props del componente han cambiado")
    console.log(prevProps)
    console.log(prevState) */
  }



  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  iniciar = () => {
    this.tictac();
    this.setState({
      visible:true,
    })
  }

  detener = () => {
    clearInterval(this.temporizador)
    
    this.setState({
      visible:false,
    })
  }

  render() {
/*     console.log(4, "El componente se dibuja (o redibuja por un cambio) en el DOM")
 */    return (
      <>
        <h2>Ciclo de vida</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    )
  }
}