import React from "react";
import { WizardStep } from "./WizardStep";
import { WizardNav } from "./WizardNav";
import { useState } from "react";

interface WizardProps {
  name: string;
  steps: Array<WizardStep>;
  activeStep?: WizardStep;
}

export const Wizard: React.FC<WizardProps> = (props) => {
  const initialStep = props.activeStep ? props.activeStep : props.steps[0];
  const [activeStep, setActiveStep] = useState(initialStep);

  return (
    <div>
      <WizardNav
        steps={props.steps}
        activeStep={activeStep}
        onChange={(step) => {
          setActiveStep(step);
        }}
      />
      <div>{activeStep.name}</div>
    </div>
  );
};
