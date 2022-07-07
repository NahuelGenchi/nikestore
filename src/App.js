import logo from './img/nike.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nike Store</h1>
        <div>
          <a
            className="App-link"
            href="https://github.com/NahuelGenchi/nikestore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project repository
          </a>
          <span> | Nahuel Genchi</span>
        </div>
        
      </header>
    </div>
  );
}

export default App;
