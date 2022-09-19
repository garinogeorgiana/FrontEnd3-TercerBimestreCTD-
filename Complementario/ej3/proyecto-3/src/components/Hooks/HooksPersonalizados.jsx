import React from "react"
import { useFetch } from "./useFetch"



export default function HooksPersonalizados(){
  const urlPokemons = "https://pokeapi.co/api/v2/pokemon"
  /* console.log(useFetch()) */
  let {data,isPending,error} = useFetch(urlPokemons);
  console.log(data)
  return(
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{whiteSpace:"pre-wrap"}}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  )
}