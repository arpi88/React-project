export const Select = ({ name, defaultValue, options, label, onChange }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <select
        name={name}
        id=""
        defaultValue={defaultValue}
        className="select"
        onChange={(event) => {
          if (!event.target.value) {
            onChange(name, undefined);
          } else {
            onChange(name, event.target.value);
          }
        }}
      >
        {options.map((option, index) => {
          return (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};
