import { useState } from "react";
import TipBtn from "./TipBtn";

const InputSection = ({ bill, setBill, tip, setTip, numOfPeople, setNumOfPeople }) => {

  const [customTipFieldFocused, setCustomTipFieldFocused] = useState(false)

  const onCustomTipFieldFocus = () => {
    setTip(0)
    setCustomTipFieldFocused(true)
  }
  
  const onCustomTipFieldFocusOut = () => {
    setCustomTipFieldFocused(false)

  }

  const handleBillChange = (e) => {
    setBill(e.target.value)
  }

  const handleTipBtnClick = (tipPercent) => {
    setTip(tipPercent/100)
  }

  const handleNumOfPeopleChange = (e) => {
    setNumOfPeople(e.target.value)
  }

  const handleTipInputFieldChange = (e) => {
    setTip(e.target.value/100)
  }

  let invalidNumOfPeople = numOfPeople <= 0;

  let customTipValue;

  if (customTipFieldFocused) {
    customTipValue = tip * 100;
  } else if (!customTipFieldFocused || (tip === 0 || tip === 0.05 || tip === 0.10 || tip === 0.15 || tip === 0.20 || tip === 0.50)){
    customTipValue = '';
  }

  return ( 
    <div className="input-section">
      <form>
        <label className="form-label" htmlFor="bill">Bill</label>
        <input 
          className="input form-input bill-amount" 
          placeholder="0" 
          type="number"
          value={bill}
          onChange={handleBillChange} />

        <label className="form-label" htmlFor="select-tip">Select Tip %</label>
        <div className="tip-buttons-container">
          <TipBtn text={"5%"} onClick={() => handleTipBtnClick(5)} selected={tip === 0.05 && !customTipFieldFocused}/>
          <TipBtn text={"10%"} onClick={() => handleTipBtnClick(10)} selected={tip === 0.10 && !customTipFieldFocused}/>
          <TipBtn text={"15%"} onClick={() => handleTipBtnClick(15)} selected={tip === 0.15 && !customTipFieldFocused}/>
          <TipBtn text={"20%"} onClick={() => handleTipBtnClick(20)} selected={tip === 0.20 && !customTipFieldFocused}/>
          <TipBtn text={"50%"} onClick={() => handleTipBtnClick(50)} selected={tip === 0.50 && !customTipFieldFocused}/>
          <input 
            className="btn input btn-tip-input" 
            type="number" 
            placeholder="Custom"
            value={customTipValue}
            onChange={handleTipInputFieldChange}
            onFocus={onCustomTipFieldFocus}
            onBlur={onCustomTipFieldFocusOut}/>
        </div>

      <label className="form-label" htmlFor="num-of-people">Number of people</label>
      <input 
        className={["input form-input num-of-people", invalidNumOfPeople ? 'input-invalid' : ''].join(' ')}
        id="num-of-people" 
        placeholder="0" 
        type="number"
        value={numOfPeople}
        onChange={handleNumOfPeopleChange} />
      </form>
    </div>
   );
}
 
export default InputSection;