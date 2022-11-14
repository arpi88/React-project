import "./App.css";
import { Header } from "./Components/Header";
import { Aside } from "./Components/Aside";
import { Main } from "./Components/Main";
import { Route,Routes } from "react-router-dom";
import {ContactMe} from "./Pages/ContactMe";
import {AboutMe} from "./Pages/AboutMe";
import{NotFound}from"./Pages/NotFound";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <Aside />
        <Routes>
            <Route path="/"element={<Main/>} />
            <Route path="/contact-me"element={<ContactMe/>} />
            <Route path="/about-me"element={<AboutMe/>} />
            <Route path="*"element={<NotFound/>} />
        </Routes>
       
      </div>
    </div>
  );
}

export default App;
