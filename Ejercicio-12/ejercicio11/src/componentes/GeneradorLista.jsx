import React from "react";


const GeneradorLista = (props) => {
    return (
        props.lista.map((item, i) => {
            return (
                <React.Fragment key={i} >
                    <h2 style={{ textAlign:"left"}}>Nombre: {item.nombre}</h2>
                    <ul>
                        <li key={1} style={{ textAlign:"left", listStyle:"circle"}} >{item.edad}</li>
                        <li key={2} style={{ textAlign:"left", listStyle:"circle"}} >{item.sexo}</li>
                        <li key={3} style={{ textAlign:"left", listStyle:"circle"}} >{item.raza}</li>
                        <li key={4} style={{ textAlign:"left", listStyle:"circle"}} >{item.tamanio}</li>
                    </ul>
                </React.Fragment>
            )
        })

    )
}

export default GeneradorLista;