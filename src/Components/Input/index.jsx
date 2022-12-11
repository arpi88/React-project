export const Input = ({ type, placeholder, label, onChange }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      ;
    </>
  );
};
