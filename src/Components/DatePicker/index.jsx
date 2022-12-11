import LibdatePicker from "react-datepicker";
export const DatePicker = ({ label,selected,onChange,name}) => {
    
  return (
    <>
      <p>{label}</p>
      <LibdatePicker selected={selected||new Date()} onChange={(date)=>onChange(date,name)}/>
    </>
  );
};
