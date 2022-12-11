import "./style.css";
import { Filters } from "./Filterts";
export const Aside = ({ changeFilter, filterOptions }) => {
  return (
    <aside className="aside-div">
      <Filters changeFilter={changeFilter} filterOptions={filterOptions} />
    </aside>
  );
};
