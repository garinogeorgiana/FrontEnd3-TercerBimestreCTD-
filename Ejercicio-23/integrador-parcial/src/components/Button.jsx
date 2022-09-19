import React from "react";

const Button = (props) => {
  return(
    <button 
      onClick={() => props.changeSelection(props.text)} 
      id={props.id} 
      className="botones"
    >{props.text}</button>
  )
}

export default Button;