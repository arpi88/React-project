import "./App.css";
import { Header } from "./Components/Header";
import { Aside } from "./Components/Aside";
import { Main } from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
