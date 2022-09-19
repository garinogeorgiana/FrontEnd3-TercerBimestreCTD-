import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home';    
import Paquetes from './components/Paquetes';
import Hoteles from './components/Hoteles';
import Nav from './components/Nav';
import React from 'react';
import axios from "axios"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hoteles:[],
      paquetes:[]
    }
  }

  async request() {
    await axios('https://pruebagcd.herokuapp.com/paquetes')
      .then(data => this.setState({
        paquetes: data.data,
      }))
  }

  componentDidMount(){
    this.request()
  }

  render(){
    /* console.log(this.state.paquetes) */
    /* this.state.paquetes.map(item => console.log(item.nombre)) */
  return (
    
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hoteles" element={<Hoteles/>}/>
          <Route path="/paquetes" element={<Paquetes data={this.state.paquetes}/>}/>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
