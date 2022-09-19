import './App.css';
import Propiedades from './components/Basico/Propiedades';
import Componente from './components/Basico/Componente';
import Estado from './components/Basico/Estado';
import RenderizadoCondicional from './components/Basico/RenderizadoCondicional';
import EventosES6  from './components/Eventos/EventosES6';
import EventosES7 from './components/Eventos/EventosES7';
import MasSobreEventos from './components/Eventos/EventosDiferentes';
import ComunicacionComponente from "./components/ComunicacionComponentes";
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/Hooks/ContadorHooks';
import ScrollHooks from './components/Hooks/ScrollHooks';
import AjaxHooks from './components/Hooks/AjaxHooks';
import HooksPersonalizados from './components/Hooks/HooksPersonalizados';
import Referencias from './components/Referencias';
import Fromularios from './components/Formularios';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      {/* <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
      <hr/>
      <Propiedades 
      defecto="Las Props" 
      cadena="Esto es una cadena" 
      numero={19} 
      booleano={true}
      arreglo={[1,2,3]}
      objeto={{nombre: "pablo",mail:"correo@corre.com"}}
      elementoReact={<i> es un elemento React</i>}
      funcion={num => num*num}
      componenteReact={<Componente msg="Soy un componente pasado como Prop"/>}
      />
      <hr/>
      <Estado/>
      <hr/>
      <RenderizadoCondicional/>
      <hr/>
      <EventosES6/>
      <hr/>
      <EventosES7/>
      <hr/>
      <MasSobreEventos/>
      <hr/>
      <ComunicacionComponente/>
      <hr/>
      <CicloVida/>
      <hr/>
      <AjaxApis/>
      <hr/>
      <ContadorHooks titulo="Seguidores"/>
      <hr/>
      <ScrollHooks/>
      <hr/>
      <AjaxHooks/>
      <hr/>
      <HooksPersonalizados/>
      <hr/>
      <Referencias/>
      <hr/>
      <Fromularios/>
      
      <hr/> */}
      <ContactForm/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    
    </div>
  );
}

export default App;
