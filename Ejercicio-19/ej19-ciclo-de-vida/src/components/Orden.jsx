import React, { Component } from 'react'

class Orden extends Component {
    componentWillUnmount(){
        alert("El pedido se cancelo")
        console.log("El Componente fue desmontando")
    }
    render(){
        return(
            <h1>Tu Pedido: {this.props.pedido}</h1>
        )
    }
}

class Pedido extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pedido: "",
       estado: true
    }

    console.log("El componente se esta construyendo.")
  }

  cancelarOrden = () => {
      this.setState({estado: false})
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
            pedido : "Pizza"
        })
        console.log("El componente fue montado")
    }, 2000);
    
}

componentDidUpdate(){
    console.log("El componente se actualizo");
}


    render() {
        let miOrden;
        if (this.state.estado) {
        miOrden = <Orden pedido={this.state.pedido}/>;
        }
    return (
        <>
            {miOrden}
            <button onClick={this.cancelarOrden}>Cancelar pedido</button>
        </>
    )
  }
}

export default Pedido;