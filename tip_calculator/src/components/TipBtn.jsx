const TipBtn = ({text, onClick, selected}) => {
  
  let btnClassName = "btn btn-tip" + ' ' + (selected ? 'btn-tip-selected' : '')

  return ( 
    <button 
      type="button" 
      className={btnClassName}
      onClick={onClick}>{text}</button>
   ); 
}
 
export default TipBtn;