const Boton = (props) => {
  return (
    <button
      onClick={() => props.cambiar(props.value)}
      style={{backgroundColor:props.value}}
    >
      {props.value}
    </button>
  )
}

export default Boton;