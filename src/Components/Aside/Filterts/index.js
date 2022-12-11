import "./style.css";
import { DatePicker } from "../../DatePicker";
import { Select } from "../../Select";

import { Input } from "../../Input";
const statusSelectOption = [
  {
    value: "done",
    label: "Done",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "",
    label: "---",
  },
];

const sortSelectOption = [
  {
    value: "a-z",
    label: "A-Ze",
  },
  {
    value: "z-a",
    label: "Z-A",
  },

  {
    value: "creation_date_oldest",
    label: "Creation Date Oldest",
  },
  {
    value: "creation_date_newest",
    label: "Creation Date Newest",
  },
  {
    value: "completion_date_oldest",
    label: "Completion Date Oldest",
  },
  {
    value: "completion_date_newest",
    label: "Completion Date Newest",
  },

  {
    value: " ",
    label: "---",
  },
];
export const Filters = ({ changeFilter, filterOptions }) => {
  return (
    <div className="filters-div">
      <Input
        type="search"
        placeholder={`Serach`}
        label={"Search"}
        onchange={changeFilter}
      />
      <DatePicker
        label={"Created Little then"}
        selected={filterOptions.create_lte}
        onchange={changeFilter}
        name={"create_lte"}
      />
      <DatePicker
        label={"Created Gratter then"}
        selected={filterOptions.create_gte}
        onchange={changeFilter}
        name={"create_gte"}
      />
      <DatePicker
        label={"Complete Little then"}
        selected={filterOptions.complete_lte}
        onchange={changeFilter}
        name={"complete_lte"}
      />
      <DatePicker
        label={"Complete Gratter then"}
        selected={filterOptions.complete_gte}
        onchange={changeFilter}
        name={"complete_gte"}
      />
      <div className="sort-status-div">
        <Select
          name="sort"
          defaultValue="a-z"
          options={sortSelectOption}
          label="Sort"
          onChange={changeFilter}
        />
        <Select
          name="status"
          defaultValue="active"
          options={statusSelectOption}
          label="Status"
          onChange={changeFilter}
        />
      </div>
    </div>
  );
};
