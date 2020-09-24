import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { WizardStep } from "./WizardStep";

interface WizardNavProps {
  steps: Array<WizardStep>;
  activeStep?: WizardStep;
  onChange: (step: WizardStep) => void;
}

export const WizardNav: React.FC<WizardNavProps> = (props) => {
  return (
    <List component="nav">
      {props.steps.map((step) => {
        return (
          <ListItem
            button
            key={step.name}
            selected={step.name === props.activeStep?.name}
            onClick={() => {
              props.onChange(step);
            }}
          >
            <ListItemText primary={step.name} />
          </ListItem>
        );
      })}
    </List>
  );
};
