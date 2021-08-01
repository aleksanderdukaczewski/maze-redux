import './App.css';
import Logo from "./Logo";
import Game from "./Game";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Logo />
      </header>
      <div className="app__content">
        <Game />
      </div>
    </div>
  );
}

export default App;
