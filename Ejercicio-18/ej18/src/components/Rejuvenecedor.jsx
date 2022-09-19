import React, { Component } from "react";

export default class Rejuvenecedor extends Component {
  state = {
    nombre: "",
    edad: 0,
  }

  handleChangeAge = (e) => {
    this.setState({
      edad: e.target.value,
    })
    console.log(this.state.edad)
  }
  handleChangeName = (e) => {
    this.setState({
      nombre: e.target.value,
    })
    console.log(e.target.value)
    console.log(this.state.nombre)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log(this.state.nombre)

    

  } 

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.edad >= 10) {
      this.setState({
        edad: this.state.edad - 10,
      })
      console.log(this.state.edad)
      return alert("Ahora tenes " + (this.state.edad - 10) + " años!")

    } else {
      console.log(this.state.edad)
      return alert("No puede tener una edad menor a 0!")
    }
    

  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "50%" }}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" onChange={this.handleChangeName} />
        <label htmlFor="edad">edad</label>
        <input type="Number" name="edad" id="edad" onChange={this.handleChangeAge} />
        <button type="submit">Restar 10 años.</button>
      </form>
    )
  }
}