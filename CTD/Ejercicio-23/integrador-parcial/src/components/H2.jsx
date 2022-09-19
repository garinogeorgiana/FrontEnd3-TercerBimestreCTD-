import React from "react";

const H2 = (props) => {
  const json = props.data
  const option = props.option
  const id = props.textId
  const text = json.filter(item => item.id === id)
  
  return(
    <h2 id={props.id}>{option ===  "A" ? text[0].opciones.a : text[0].opciones.b  }</h2>
  )
}

export default H2;