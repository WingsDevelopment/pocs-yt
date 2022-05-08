import "./App.css";
import { CalculatorInitial } from "./calculator/CalculatorInitial";
import { CalculatorWithReducer } from "./calculator/CalculatorWithReducer";

function App() {
  return (
    <div className="app-container">
      {/* <CalculatorInitial /> */}
      <CalculatorWithReducer />
    </div>
  );
}

export default App;
