import TipBtn from "./TipBtn";

const InputSection = () => {
  return ( 
    <div className="input-section">
      <form>
        <label className="form-label" htmlFor="bill">Bill</label>
        <input className="input form-input bill-amount" placeholder="0" type="number" />

        <label className="form-label" htmlFor="select-tip">Select Tip %</label>
        <div className="tip-buttons-container">
          <TipBtn text={"5%"} />
          <TipBtn text={"10%"} />
          <TipBtn text={"15%"} />
          <TipBtn text={"20%"} />
          <TipBtn text={"50%"} />
          <input className="btn input btn-tip-input" type="number" placeholder="Custom"/>
        </div>

      <label className="form-label" htmlFor="num-of-people">Number of people</label>
      <input className="input form-input num-of-people" id="num-of-people" placeholder="0" type="number" />
      </form>
    </div>
   );
}
 
export default InputSection;