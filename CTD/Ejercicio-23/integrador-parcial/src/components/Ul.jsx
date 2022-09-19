import React from "react";

const Ul = (props) => {
  
  return(
    <ul className="recordatorio" style={{marginTop:"5px"}}>
      {props.historial.map((item,index) => { return (<li key={index} >{item}</li>)})}
    </ul>
  )
}

export default Ul;