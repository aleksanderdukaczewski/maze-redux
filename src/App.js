import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
// import Logo from "./components/Logo/Logo";
// import Game from "./Game";
// import Control from "./Control";
import { Logo, Game, Control } from './components';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app__header">
          <Logo />
        </header>
        <div className="app__content">
          <Game />
          <Control />
        </div>
      </div>
    </Provider>
  );
}

export default App;
