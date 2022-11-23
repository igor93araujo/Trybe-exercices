import logo from './logo.svg';
import './App.css';
import Image from './Image.js';
import cat from './cat-2083492_1280.jpg'

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
        >
          Learn React
        </a>
        <Image source = { cat } alternativeText = "Cute cat staring"/>
      </header>
    </div>
  );
}

export default App;
