import logo from './logo.svg';
import './App.css';
import { exibirHorario } from './components/Horario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id="lnk"
          >
          Learning React
        </a>
        <br/>
        <imput type= "text" id="txtlogin"/>
        <br/>
        <imput type= "text" id="senha"/>
        <br/>
        <button
        
          onClick={exibirHorario}
        >
        ver Horario</button>
        </header>

        </div>
  )
}

export default App;
