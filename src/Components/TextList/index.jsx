import { useState } from "react";
import { NewList } from "../NewList";
import { InputForm } from "../InputForm";
export const TextList = () => {
  const [textData, setTextData] = useState([]);
  return (
    <div>
      <InputForm setTextData={setTextData} />
      <NewList textData={textData} />
    </div>
  );
};
