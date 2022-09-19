import logo from './logo.svg';
import './App.css';
import GeneradorLista from './componentes/GeneradorLista';
import listaPerros from './componentes/lista';



function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign:"left"}}>Clientes caninos de Veterinaria</h1>
      <div>
          <GeneradorLista lista={listaPerros}/>
      </div>
    </div>
  );
}

export default App;


