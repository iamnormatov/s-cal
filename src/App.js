import React, { useState } from "react";

import './App.css';

const App = () => {
    const [result, setResult] = useState("");

    const clickButtons = (e) => {
      setResult(result.concat(e.target.name))
    }


    const clickClear = () => {
       setResult("");
    }


   const clickClearOne = () => {
      setResult(result.slice(0, -1));
   }

    const clickEquale = () => {
      setResult(eval(result))
    }

    
    return (
        <div className="App">
           <div className="container">
              <form>
                 <input type="text" value={result} />
              </form>

              <div className="keyButton">
                 <button name="0" onClick={clickClear} id="clear" >Clear</button>
                 <button name="C" onClick={clickClearOne} id="clearZero">AC</button>
                 <button name="1" onClick={clickButtons}>1</button>
                 <button name="2" onClick={clickButtons}>2</button>
                 <button name="3" onClick={clickButtons}>3</button>
                 <button name="+" onClick={clickButtons} className="operators">+</button>
                 <button name="4" onClick={clickButtons}>4</button>
                 <button name="5" onClick={clickButtons}>5</button>
                 <button name="6" onClick={clickButtons}>6</button>
                 <button name="-" onClick={clickButtons} className="operators">-</button>
                 <button name="7" onClick={clickButtons}>7</button>
                 <button name="8" onClick={clickButtons}>8</button>
                 <button name="9" onClick={clickButtons}>9</button>
                 <button name="*" onClick={clickButtons} className="operators">*</button>
                 <button name="0" onClick={clickButtons} id="zero" className="operators">0</button>
                 <button name="." onClick={clickButtons} className="operators">.</button>
                 <button onClick={clickEquale} className="operators">=</button>
                 <button name="/" onClick={clickButtons} className="operators">/</button>
              </div>
           </div>    
        </div>
    )
}

export default App;