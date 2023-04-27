import { useState } from "react";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

const Calculator = () => {

  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [numOfPeople, setNumOfPeople] = useState(1)

  const handleReset = () => {
    setBill(0)
    setTip(0)
    setNumOfPeople(1)
  }

  let tipAmount = (bill * tip / numOfPeople).toFixed(2);
  let totalAmount = ((bill * (1 + tip)) / numOfPeople).toFixed(2);

  return ( 
    <div className="card"> 
    <div className="column">
      <InputSection 
        bill={bill} setBill={setBill} 
        tip={tip} setTip={setTip}
        numOfPeople={numOfPeople} setNumOfPeople={setNumOfPeople}/>
    </div>
    <div className="column">
      <ResultSection 
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        handleReset={handleReset}/>
    </div>
    </div>
   );
}
 
export default Calculator;