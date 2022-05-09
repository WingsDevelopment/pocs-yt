import "./App.css";
import { CalculatorInitial } from "./calculator/CalculatorInitial";
import { CalculatorState } from "./calculator/CalculatorState";
import { CalculatorWithReducer } from "./calculator/CalculatorWithReducer";

function App() {
  return (
    <div className="app-container">
      <div className="calculator-container">
        {/* <CalculatorInitial /> */}
        <CalculatorState />
      </div>
    </div>
  );
}

export default App;
