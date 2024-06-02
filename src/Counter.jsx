import React from "react";

export default class Counter extends React.Component {

  handleAttack(){
    alert("Attack clicked")
  }

  defendAttack(){
    alert("Defend clicked")
  }
  render() {
    return(
        <div className="row text-white">
          <h1>Counter:</h1>
          <button onClick={this.handleAttack} style={{width:"200px"}}>
            +1
            </button>
          <button onClick={this.defendAttack}style={{width:"200px"}}>
            -1
            </button>
        </div>
    );
} }