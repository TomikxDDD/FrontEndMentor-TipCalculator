import ResultAmountField from "./ResultAmountField";

const ResultSection = ({ tipAmount, totalAmount, handleReset}) => {
  return ( 
    <div className="result-section">
      <div>
        <ResultAmountField text={"Tip amount"} amount={tipAmount}/>
        <ResultAmountField text={"Total"} amount={totalAmount}/>
      </div>
      <button className="btn btn-reset" onClick={handleReset}>Reset</button>
    </div>
   );
}
 
export default ResultSection;