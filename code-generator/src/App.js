import logo from './logo.svg';
import './App.css';

import GeneratorWindow from './components/GeneratorWindow.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="UI-window">
          <GeneratorWindow />
        </div>
      </header>
    </div>
  );
}

export default App;
