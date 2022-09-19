//import logo from './logo.svg';
import './App.css';
import Boton from "./componentes/Boton"
import ImagenLogo from "./componentes/ImagenLogo"
import Hola from "./componentes/Hola"
import Footer from "./componentes/Footer"

function App() {
  return (
    <div className="App">
      <Boton/>
      <header className="App-header">
        <Hola color="red" nombre="Felicitas"/>
        <img src={ImagenLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Boton/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
