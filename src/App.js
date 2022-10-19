import "./App.css";
import { Header } from "./Components/Header";
import { Aside } from "./Components/Aside";
import { Main } from "./Components/Main";
import {Footer} from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <Aside />
        <Main />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
