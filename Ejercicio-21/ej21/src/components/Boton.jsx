import React from "react";

const Boton = (props) => {
  return(<React.Fragment>
    <button onClick={props.cambiar} value={props.value}>{props.categoria}</button>
  </React.Fragment>)
}

export default Boton;