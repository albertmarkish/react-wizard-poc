import * as React from "react";
import "./styles.css";
import { Wizard } from "./Wizard/Wizard";
import { Step1, Step2 } from "./Wizard/Steps";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Wizard
        name="Hello Wizard"
        steps={[
          {
            name: "step 1",
            component: Step1
          },
          {
            name: "step 2",
            component: Step2
          }
        ]}
      />
    </div>
  );
}
