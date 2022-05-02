import "./App.css";
import { CalculatorInitial } from "./components/CalculatorComponents/CalculatorInitial";
import { CalculatorReducer } from "./components/CalculatorComponents/CalculatorReducer";
import { CalculatorState } from "./components/CalculatorComponents/CalculatorState";

function App() {
  return (
    <div className="app-container">
      <CalculatorInitial />
      {/* <CalculatorState /> */}
      {/* <CalculatorReducer /> */}
    </div>
  );
}

export default App;
