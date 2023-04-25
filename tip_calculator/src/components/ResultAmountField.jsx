const ResultAmountField = ({ text, amount }) => {
  return ( 
    <div className="result-amount-container">
      <div className="result-amount-title">
        <p>{text}</p>
        <span>/ person</span>
      </div>
      <p className="result-amount-price">${amount}</p>
    </div>
  );
}
 
export default ResultAmountField;