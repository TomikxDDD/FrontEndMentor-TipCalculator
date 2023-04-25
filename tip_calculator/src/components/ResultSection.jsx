import ResultAmountField from "./ResultAmountField";

const ResultSection = () => {
  return ( 
    <div className="result-section">
      <div>
        <ResultAmountField text={"Tip amount"} amount={0}/>
        <ResultAmountField text={"Total"} amount={0}/>
      </div>
      <button className="btn btn-reset">Reset</button>
    </div>
   );
}
 
export default ResultSection;