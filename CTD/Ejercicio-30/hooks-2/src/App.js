import {useState, useEffect} from 'react';
import './App.css';

function App() {
  //VAMOS A VER HOOKS
  //CONST [VARIABLE, METODO]=USESTATE(valor inicial)

  const[opcion,setOpcion]=useState('hoteles')
  const[data, setData]=useState([])

  //los efectos secundarios
  //hay un metodo con 2 parametros
  //useEffect(callback como 1er argumento, el 2do el array)
  //useEffecr(callback, [variable])

  let url = "https://pruebagcd.herokuapp.com/";
  useEffect(()=>{
    const api=async()=>{
      const response = await fetch(url+opcion);
      //convertimos en json
      const json = await response.json();
      setData(json)
    }
  api();
  },[opcion])
  return (
    <div className="">
      <ul type="none">
      {data.map((o, i)=>{return <li key={i+o.nombre}>{o.nombre}</li>})}
      </ul>
    </div>
  );
}

export default App;