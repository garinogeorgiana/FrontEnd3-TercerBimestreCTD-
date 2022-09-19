import React, { Component } from 'react'
import json from "../DB/data.json"
import Button from "./Button";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import Ul from './Ul';
import Swal from "sweetalert2";

class Div extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: json,
      textId: "1",
      contador: 2,
      selection: "",
      prevSelection: "",
      historial:[]
    }

  }

  componentDidMount(){
    Swal.fire({  title: 'Esta es tu historia!',   text: 'Selecciona tu camino.',   imageUrl: 'https://megara.com.ar/wp-content/uploads/2016/10/95526_elige2.jpg',   imageWidth: 400,   imageHeight: 200,   imageAlt: 'Coleccion Libros', })
  }


  handleSubmit = (opcion) => {
    console.log()
    if(this.state.contador ===6){
      Swal.fire({  title: 'Este es el fin de tu historia!',   text: 'Recarga la pagina para volver a participar.',   imageUrl: 'https://images.squarespace-cdn.com/content/v1/5148b380e4b0106646129f8e/1522084909209-TJI0W8WIM24Z75M31GSN/el-fin-de-la-historia+1477.jpg',   imageWidth: 400,   imageHeight: 200,   imageAlt: 'Coleccion Libros', })
    }else{
      this.setState({
        textId:this.state.contador+(opcion.toLowerCase()),
        contador:this.state.contador+1,
        selection: opcion,
        prevSelection: opcion,
        historial: this.state.contador > 2 ? [...this.state.historial,this.state.selection] : []
      })
    }
  }

//! problemas con la cola de espera en la cual pone React pone los cambios de setState hasta que termine toda la ejecucion del bloque, 
//! termine refactorizando todo despues de entender como funcionaban los tiempos en los cuales los cambios se hacen efectivos.
 /*  componentDidMount(){
    
  }

  
  selection = (date) => {
    this.setState({
      selection: date,
      contador:this.state.contador+1,
      historial:[...this.state.historial,date]
    })
    
    this.updateHistory()
  }

  updateHistory = () => {
    
    switch (this.state.contador) {
      case 1:
        this.stageTwo()
        console.log("stage 2 switch");
        break;
      case 2:
        this.stageThree()
        
        break;
      case 3:
        this.stageFour()
        
        break;
      case 4:
        this.stageFive()
        
        break;
      default:
        break;
    }
  }
  

  stageTwo = () => {
    console.log(this.state.selection+"1");
    if (this.state.selection === "A") {
      console.log(this.state.selection)
      this.setState({
        text: this.state.data[1].historia,
        prevSelection: "A",       
      })
      console.log(this.state.selection+"A")
      
    } else if (this.state.selection === "B") {
      console.log(this.state.selection+"B")
      this.setState({
        text: this.state.data[2].historia,
        prevSelection: "B",
      })
      console.log(this.state.selection+"B")
      
    }
    console.log(this.state.text);
    this.updateChoice()
    console.log(this.state.selection)
  }

  stageThree = () => {
    if (this.state.selection === "A") {
      this.setState({
        text: this.state.data[3].historia,
        prevSelection: "A",
      })
    } else if (this.state.selection === "B") {
      this.setState({
        text: this.state.data[4].historia,
        prevSelection: "B",
        
      })
    }
    this.updateChoice()
  }

  stageFour = () => {
    if (this.state.selection === "A") {
      this.setState({
        text: this.state.data[5].historia,
        prevSelection: "A",
        
      })
    } else if (this.state.selection === "B") {
      this.setState({
        text: this.state.data[6].historia,
        prevSelection: "B",
        
      })
    }
    this.updateChoice()
  }

  stageFive = () => {
    if (this.state.selection === "A") {
      this.setState({
        text: this.state.data[7].historia,
        prevSelection: "A",
        
      })
    } else if (this.state.selection === "B") {
      this.setState({
        text: this.state.data[8].historia,
        prevSelection: "B",
        
      })
    }
    this.updateChoice()
  }

  updateChoice = () => {
    this.setState({
      choiceA: data[this.state.contador].opciones.a,
      choiceB: data[this.state.contador].opciones.b
    })
  } */

  render() {
    return (
      <div className='layout'>
        <H1 textId={this.state.textId} data={this.state.data} />
        <div className="opciones">
          <div className="opcion">
            <Button id="A" text="A" changeSelection={this.handleSubmit}/>
            <H2 option="A" textId={this.state.textId} data={this.state.data}/>
          </div>
          <div className="opcion">
            <Button id="B" text="B" changeSelection={this.handleSubmit} />
            <H2 option="B" textId={this.state.textId}  data={this.state.data}/>
          </div>
        </div>
        <div className="recordatorio">
          <H3 text="Sección anterior:" eleccionAnterior={this.state.prevSelection}/>
          <H4 text="Historial de opciones elegidas:" historial={this.state.historial} />
          <Ul historial={this.state.historial}/>
        </div>
      </div>
    )
  }
}

export default Div;