import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import Data from './db/data.json'
import Boton from './components/Boton'
let categorias = {all:"Todos",cats:"Gatos",dogs:"Perros"}


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      choice:categorias.all,
      todos:Data
    }
  }

 /*  componentWillMount(){
    console.log("Component Will Mount")
  } */

  componentDidMount(){
   }

    cambiar =(event) =>{
      console.log(event.target.value)
        this.setState({
        choice:event.target.value
      }) 
    }

  render(){
    return (
    <div className="App">
      <h1>Veterinaria</h1>
      {this.state.choice === "Todos" 
        ?
          this.state.todos.map((ele,index) => <li key={(ele.name+index+1).toString()}>{ele.name}</li>)
        :
          Data.filter((ele) => {return ele.type === this.state.choice}).map((ele,index) => {return <li key={(ele.name+index+2).toString()}>{ele.name}</li>} )
      }
      <Boton cambiar={this.cambiar} value="dogs" categoria={categorias.dogs}/>
      <Boton cambiar={this.cambiar} value="cats" categoria={categorias.cats}/>
      
    </div>
  );
}
}

export default App;
