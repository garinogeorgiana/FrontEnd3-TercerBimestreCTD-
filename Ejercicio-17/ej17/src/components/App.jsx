import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import list_pokedex from "../pokedex.json"


const pokedex = list_pokedex



export default class App extends Component {

 
  constructor(props){
    super(props)
    this.state={
    pokemon: [pokedex[2].name, pokedex[2].id, pokedex[2].type],
    pokemons: pokedex
  }
  this.update=this.update.bind(this)
  }
  



  update(pokemon) {
    console.log(pokemon);
    let id = pokemon.pokemon[1]-1
    this.setState({
      pokemon:[pokedex[id].name, pokedex[id].id, pokedex[id].type],
    })
  }

   /* con este metodo asignamos un numero al pokemon, dependiendo del length que tenga con 2, 1 o ningun cero delante
   por que en la url para buscarlo no reconoce le id 1 por ejemplo, es necesario 001. */
  getPokemon = () => {
      if (this.state.pokemon[1]?.toString()?.length === 1) return `00${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 2) return `0${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 3) return `${this.state.pokemon[1]}`
  }

  /* Aca buscamos los tipos deel pokemon, este dato es un array, si es de 1 solo tipo entra en el primer if,
  de ser de mas de un tipo, entra en la segunda condicion que genera un texto mas por cada tipo. */
  getTypes = () => {
    let phrase;
    if(this.state.pokemon[2].length === 1) return this.state.pokemon[2][0]
    if(this.state.pokemon[2].length > 1) {
     for (let index = 0; index < this.state.pokemon[2].length; index++) {
       if(index === 0) phrase = this.state.pokemon[2][index]
       if(index !== 0) phrase = `${phrase} and ${this.state.pokemon[2][index]}`
     }
     return phrase
    }
  }

  render() {
    
    return (
      <div style={{display:"flex"}}>
      <div className="container">
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={this.state.pokemon[0]} />
        <p id="name">{`${this.state.pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <Pokedex updateParent={this.update} pokemons={this.state.pokemons} />
    </div>
    )
  }
}


