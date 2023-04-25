import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

const Calculator = () => {
  return ( 
    <div className="card"> 
    <div className="column">
      <InputSection />
    </div>
    <div className="column">
      <ResultSection />
    </div>
    </div>
   );
}
 
export default Calculator;