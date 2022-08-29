import { Button } from "../Button";
import "./style.css";
export const ButtonsGroup = (props) => {

  return (
    <div className="buttons-wrapper">
      {/* Simple buttons */}
      <Button value={'primary'}  color={'#fcfcfc'} bgColor={'#0c6efd'} />
      <Button value={'secondary'}  color={'#fcfcfc'} bgColor={'#6c757d '}/> 
      <Button value={'success'}/>
      <Button value={'info'}/>
      <Button value={'warning'}/>
      <Button value={'danger'}/>
    </div>
  );
};
