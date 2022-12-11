import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Aside } from "./Components/Aside";
import { Main } from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import { ContactMe } from "./Pages/ContactMe";
import { AboutMe } from "./Pages/AboutMe";
import { NotFound } from "./Pages/NotFound";
/*import { FiltersContextProvider } from "./Context/Providers/FiltersContextProvider";
 */
function App() {
  const [filterOptions, setFilterOptions] = useState({
    status: undefined,
    serach: undefined,
    create_lte: undefined,
    create_gte: undefined,
    complete_lte: undefined,
    complete_gte: undefined,
    sort: undefined,
  });
  console.log(filterOptions);

  const changeFilter = (name, value) => {
    setFilterOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
      <Header />
      <div className="app">
        <Aside changeFilter={changeFilter} filterOptions={filterOptions} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
