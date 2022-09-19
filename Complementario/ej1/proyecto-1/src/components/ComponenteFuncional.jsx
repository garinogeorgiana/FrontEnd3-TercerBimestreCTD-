import React from "react";
/*
En un componente funcional usamos azucar sintactico, podemos hacer mas
con menos codigo. No necesitamos extraer la clase Component de react.
*/

/* las props no son accedidas por this, a diferencia del componente de clase
y necesitamos pasarle el props por parametro.
*/
function ComponenteFuncional(props){
    return <h2>{props.msg}</h2>
}

export default ComponenteFuncional;