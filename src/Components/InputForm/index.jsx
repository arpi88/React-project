import "./style.css";
export const InputForm = ({ setTextData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0];
    const value = input.value;

    setTextData((prev) => [...prev, value]);
    input.value = "";
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input type="text"></input>
      <button>Add</button>
    </form>
  );
};
