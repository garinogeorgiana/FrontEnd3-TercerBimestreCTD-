import Card from "./Card";

const Paquetes = (props) => {
  // props.data.map(item => console.log(item.nombre))
  return (
    <div className="row d-flex justify-content-center">
      <h2>Paquetes</h2>
      {props.data.map((item, i) => {
        return (<Card data={item} key={i.toString() + "p"} />)
      })}
    </div>
  )


}
export default Paquetes;