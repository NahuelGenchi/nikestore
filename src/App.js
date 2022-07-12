import logo from './img/nike.png';
import './App.css';

function App() {
  //spread operator
  const numberList = [1, 2, 3];
  const letterList = ["a", "b", "c"];
  //dynamic properties
  const dynamicKey = "university";
  const person = {
    name: {
      first: "Nahuel",
      last: "Genchi"
    },
    [dynamicKey]: "Universidad Nacional de Tres de Febrero",
    alphaNumericList: [...numberList, ...letterList]
  };

  console.log(`Person: ${person.name.first} ${person.name.last}`);
  console.log(`University: ${person.university}`);
  console.log(`Alphanumeric list: ${person.alphaNumericList}`);

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
