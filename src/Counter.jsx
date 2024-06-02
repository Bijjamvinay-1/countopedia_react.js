import React from "react";
import attack from "./Image/attack.png";
import defend from "./Image/defend.png";

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handledefend = this.handledefend.bind(this);
    this.state={
      count:0,
    }
  }

  handleAttack = () => {
    alert("Attack clicked")
    this.setState((previousState) =>{
      let newCount = previousState.count + Math.round(Math.random()* 10);
      return{
        count: newCount,
      }
    })
  }

  handledefend = () => {
    alert("Defend clicked")
    this.setState((previousState) =>{
      let newCount = previousState.count - Math.round(Math.random()* 10);
            return{
        count: newCount,
      }
    })
  }
  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } 
    else {
      this.handledefend();
    }
  };
  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };
  render() {
    return(
        <div className="row text-white text-center">
          <h1>Game Score :{this.state.count}</h1>
          <p>You will win at +10 and lose at -10 points!</p>
          <p>Lets Play: </p>
          <div className="col-6 col-md-3 offset-md-3">
          <img
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid green"
          }}
          className="p-4 rounded" src={attack} onClick={this.handleAttack}/>
          </div>

          <div className="col-6 col-md-3 offset-md-3">
          <img
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid red"
          }}
          className="p-4 rounded" src={defend} onClick={this.handledefend}/>
          </div>
          <div className="col-12 col-md-4 offset-md-4" >
            <button className="btn btn-secondary w-100 mt-2" 
            onClick={this.handleRandomPlay}>
            Random Play
            </button>
            <br />
            <button className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}>
            Reset
              </button>
          </div>
          
        </div>
    );
} }