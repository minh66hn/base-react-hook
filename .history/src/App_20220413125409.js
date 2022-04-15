import "./App.css";
import logo from "./logo.svg";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
