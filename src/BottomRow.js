import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [down, downChange] = useState(0);
  const [toGo, move] = useState(0);
  const [ballOn, ballMove]= useState(0);
  const [quarter, quarterChange] = useState(1);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={() =>{downChange(down + 1)} } className="homeButtons__touchdown">add down</button>
        <button onClick={() =>{downChange(down - down)} } className="homeButtons__touchdown">clear downs</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <button onClick={() =>{move(toGo - 10)}} className="homeButtons__touchdown">-10</button>
        <button onClick={() =>{move(toGo - 1)}} className="homeButtons__touchdown">-1</button>
        <button onClick={() =>{move(toGo - toGo)}} className="homeButtons__touchdown">reset</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button onClick={() =>{ballMove(ballOn + 10)}} className="homeButtons__touchdown">+10</button>
        <button onClick={() =>{ballMove(ballOn + 1)}} className="homeButtons__touchdown">+1</button>
        <button onClick={() =>{ballMove(ballOn -ballOn)}} className="homeButtons__touchdown">reset</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={() =>{quarterChange(quarter + 1)}} className="homeButtons__touchdown">next quarter</button>
        <button onClick={() =>{quarterChange(quarter -quarter)}} className="homeButtons__touchdown">reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
