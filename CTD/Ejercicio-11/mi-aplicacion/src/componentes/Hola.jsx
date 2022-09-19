const Hola =(props)=>{
    return(
        <div>
            <h1 style={{color:props.color}}>Bienvenida {props.nombre} a nuestro equipo!</h1>
        </div>
    )
}

export default Hola;