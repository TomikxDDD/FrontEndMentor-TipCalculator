import Calculator from "./Calculator";
import Footer from "./Footer";

const TipCalculatorApp = () => {
  return ( 
    <div className="container">
      <h1 className="app-name">
        <p>spli</p>
        <p>tter</p>
      </h1>
      <Calculator />
      <Footer />
    </div>
   );
}
 
export default TipCalculatorApp;