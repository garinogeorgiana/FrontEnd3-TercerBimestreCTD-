import logo from './logo.svg';
import './App.css';
import React from "react";
import Boton from './components/Boton';
import Lista from './components/Lista';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      history:["yellow"]
    }
    this.agregar=this.agregar.bind(this)
  }
  componentDidMount(){
    this.setState(
      {history:[]}
    )
  }
  componentWillUnmount(){
    alert(' Hasta luego!')
  }

  agregar(i){
    /* let viejoValor = this.state.history;
    let nuevoValor = viejoValor.push(i); */
    console.log([...this.state.history,i])
    this.setState(
      {history:[...this.state.history,i]}
    )
  }
  

  render(){
    let lista = this.state.history.map((i,index)=> {return <li key={index.toString()}>{i}</li>})
    return (
      <div className="App">
        <Boton value="yellow" cambiar={this.agregar}/>
        <Boton value="red" cambiar={this.agregar}/>
        <Boton value="blue" cambiar={this.agregar}/>
        <Boton value="green" cambiar={this.agregar}/>
        <Boton value="coral" cambiar={this.agregar}/>
        <Lista lista={lista}/>
      </div>
    );  
  }
  
}

export default App;
