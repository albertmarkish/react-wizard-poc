import React, {useContext} from "react";
import { Box } from "@material-ui/core";
import { IWizardStep } from "./types";
import { WizardNav } from "./WizardNav";
import { WizardFooter } from "./WizardFooter";
import { useState } from "react";
import {WizardHeader} from "./WizardHeader";
import VPGContext from "../VpgWizard/store/context";
import ReactJson from "react-json-view";

interface WizardProps {
    steps: Array<IWizardStep>;
    title?: string;
    activeStep?: IWizardStep;
}

export const Wizard: React.FC<WizardProps> = (props) => {
  const initialStep = props.activeStep ? props.activeStep : props.steps[0];
  const [activeStep, setActiveStep] = useState(initialStep);

  const isLastStep = () => { return activeStep.index === props.steps.length - 1 }
  const getNextStep = () => { return isLastStep() ? null : props.steps[activeStep.index + 1] }
  const isFirstStep = () => { return activeStep.index === 0 }
  const getPreviousStep = () => { return isFirstStep() ? null : props.steps[activeStep.index - 1] };
  const onNext = () => {
        const nextStep = getNextStep();
        if (nextStep) setActiveStep(nextStep);
  }
  const onPrevious = () => {
      const prevStep = getPreviousStep();
      if (prevStep) setActiveStep(prevStep);
  }

    const { state } = useContext(VPGContext);

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <WizardHeader>{props.title}</WizardHeader>
            <WizardNav
                steps={props.steps}
                activeStep={activeStep}
                onChange={(step) => {
                    setActiveStep(step);
                }}
            />
            <Box display="flex" flexGrow="1" alignItems="center" borderTop="solid 2px pink">
                <Box width="50vw">
                    {activeStep.component}
                </Box>
                <Box width="50vw">
                    <ReactJson src={state} theme={"monokai"} collapsed={false} />
                </Box>
            </Box>
            <WizardFooter
                isNextEnabled={!isLastStep()}
                isPreviousEnabled={!isFirstStep()}
                showDone={isLastStep()}
                onNext={onNext}
                onPrevious={onPrevious}
                onCancel={() => {
                }}
                onDone={() => {
                }}
            ></WizardFooter>
        </Box>
    );
};
