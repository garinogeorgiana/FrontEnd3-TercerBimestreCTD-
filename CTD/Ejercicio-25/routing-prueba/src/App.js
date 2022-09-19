import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function Main() {
  return <h2>Main</h2>
}

function Home() {
  return <h2>Home</h2>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/home'element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
