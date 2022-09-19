import logo from './logo.svg';
import './App.css';
import Hone from './components/Hone';
import styles from "./components/cssModules/encabezado.module.css"
import peliculas from './components/DB/peliculas';
import Principal from './components/Principal';


function App() {
  
  return (
    <div className="App">
      <Hone texto="Pablo" clase={styles.title}/>
      <Principal datos={peliculas} backgroundColor="yellow" color="red">

      </Principal>
    </div>
  );
}

export default App;
