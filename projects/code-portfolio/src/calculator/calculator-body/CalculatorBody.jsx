import React from "react";
import { Button } from "../../components/button/Button";
import { GridItem } from "../../components/grid-item/GridItem";

import "./CalculatorBody.css";

const CalculatorBody = ({
  onClearClicked,
  onOperatorClicked,
  onSymbolClicked,
}) => {
  return (
    <section className="calculator-grid">
      {/* first row */}
      <GridItem>
        <Button content={"C"} onClickFn={onClearClicked} color="light" />
      </GridItem>

      {["/", "*", "-"].map((operator, i) => (
        <GridItem key={i}>
          <Button
            content={operator}
            onClickFn={onOperatorClicked}
            color="light"
          />
        </GridItem>
      ))}

      {/* second row */}
      {["7", "8", "9"].map((symbol, i) => (
        <GridItem key={i}>
          <Button content={symbol} onClickFn={onSymbolClicked} color="dark" />
        </GridItem>
      ))}

      <GridItem isTall={true}>
        <Button content={"+"} onClickFn={onOperatorClicked} color="light" />
      </GridItem>

      {/* third row & forth row */}
      {["4", "5", "6", "1", "2", "3"].map((symbol, i) => (
        <GridItem key={i}>
          <Button content={symbol} onClickFn={onSymbolClicked} color="dark" />
        </GridItem>
      ))}

      {/* fifth row */}
      <GridItem isTall={true}>
        <Button content={"="} onClickFn={onOperatorClicked} color="light" />
      </GridItem>

      <GridItem isWide={true}>
        <Button content={"0"} onClickFn={onSymbolClicked} color="dark" />
      </GridItem>

      <GridItem>
        <Button content={"."} onClickFn={onSymbolClicked} color="dark" />
      </GridItem>
    </section>
  );
};

export default CalculatorBody;
