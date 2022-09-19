import './App.css';
import Paragraph from './components/Paragraph';
import UlGenerator from './components/UlGenerator';



const invitedList = [
  {
      name: "Nicolás",
      task: "Traerá papas fritas",
  }, 
  {
      name: "Iván",
      task: "traerá pizzas",      
  },
  {
      name: "Carolina",
      task: "traerá bebidas",      
  }
]

function App() {
  return (
    <div style={{borderStyle:"solid", width:"450px", marginLeft:"calc(50% - 225px)", marginTop:"100px"}} className="App">
      <Paragraph weight="bold" text="Invitados:" />
      <UlGenerator array={invitedList} type="invitados" >
      </UlGenerator>
      <Paragraph weight="bold" text="Tareas:" />
      <UlGenerator array={invitedList} type="tareas">
      </UlGenerator>

      
      
      
    </div>
  );
}

export default App;
