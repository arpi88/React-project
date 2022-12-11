import { FiltersContext } from "..";
export const FiltersContextProvider = ({ children }) => {
  <FiltersContext.Provider value={{ Arpi: "Hello" }}>
    {children}
  </FiltersContext.Provider>;
};
