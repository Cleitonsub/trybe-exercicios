import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const repete = (elementsArray) => {
  return elementsArray.forEach(elementArray => elementArray);
}

function App() {
  const frutas = ['banana', 'pera', 'maçã', 'morango'];
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
        >
          Learn React
        </a>
        {frutas.map(Task)}
      </header>
    </div>
  );
}

export default App;
