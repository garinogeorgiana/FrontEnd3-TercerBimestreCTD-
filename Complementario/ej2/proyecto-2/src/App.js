import logo from './logo.svg';
import './App.css';


function App() {
  let nombre = "Pablo";
  let auth = true;
  let estaciones = ["Primavera","Verano","Otoño","Invierno"]
  return (  
   <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>
          {auth ? "El usuario estalogueado":"El usuario No esta loguead"}
        </p>
        <p>{2+1}</p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {estaciones.map((ele,i) => <li key={i}>{ele}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
