import logo from './logo.svg';
import './App.css';
import Children from './components/Children';
import Father from './components/Father';
import Ul from './components/Ul';

function App() {
  return (
    <div className="App">
      <Father>
        <Children nombre=" || Soy una props de un children"/>
        <Ul />
      </Father>
    </div>
  );
}

export default App;
