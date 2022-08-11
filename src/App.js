import logo from './logo.svg';
import './App.css';


const Mainsection=()=>{
  return(<div className="main-section">
  <HeadingSection/>
  <Wrapper/>
  <Footertext/>
  </div>
  )
}
const HeadingSection=()=>{
  return(
    <div className="heading-text">
      <h1>ԻՆՉՊԵՍ ՕԳՏՎԵԼ</h1>
      <p>Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով</p>
</div>
  )
}
const Card=(props)=>{
  const {imgUrl,label}=props;
  return(
  <div className="card">
 
    <img src={imgUrl} className="img" alt="img"/>
    <p className="card-text"> {label}</p>
    </div>
    )
  
}

const Wrapper=()=>{
  return(
  <div className="card-wrapper">
    <Card
    imgUrl ={"https://onex.am/img/svg/step1.svg"}
    label ={"Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ"}/>
    < Card
    imgUrl={"https://onex.am/img/svg/step2.svg"}
    label ={"Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս"}/>
    <Card
    imgUrl={"https://onex.am/img/svg/step3.svg"}
    label={"Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում"}/>
    </div>
  )}
  const Footertext=()=>{
    return(
      <p>Կարող եք օգտվել նաև «Գնի՛ր իմ փոխարեն» ծառայությունից</p>
    )
  }
  




function App() {
  return (
    <div className="App">
     <Mainsection/>
    
    </div>
  );
}

export default App;
