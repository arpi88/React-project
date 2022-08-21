
import "./style.css"
import React from "react"


class Shapes extends React.Component {
    state={
        rotateDegree : 0
    }
    handleRotate=()=>{
        this.setState({
            rotateDegree:this.state.rotateDegree + 45
        })
    }

render() {
    return(
        <div className="wrapper">
        <button className="btn"onClick={this.handleRotate}>Rotate</button>
        <div className="sqr" style={{transform:`rotate(${this.state.rotateDegree}deg)`}}></div> 
        <div className="absolute-element"></div> 
        </div> 
)}
}
   export default Shapes;





    

