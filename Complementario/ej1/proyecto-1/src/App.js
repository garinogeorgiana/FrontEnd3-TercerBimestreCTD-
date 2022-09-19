import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import ComponenteBis from './components/ComponenteBis';
import ComponenteFuncional from './components/ComponenteFuncional';

function App() {
  let nombre = "Pablo";
  let auth = true;
  let estaciones = ["Primavera","Verano","Otoño","Invierno"]
  return (  
   <>
    <div className="App">
      <header className="App-header">
        
        {/* creamos un componente de clase */}
        <Componente></Componente>

        {/* Podemos crear un atributo llamado msg*/}
        <ComponenteBis msg="Hola soy un componente Bis"></ComponenteBis>
        
        {/* Creamos un componente funcional */}
        <ComponenteFuncional msgFuncional="Hola, soy un componente funcional."/>
      </header>
    </div>
    </>
  );
}

export default App;
