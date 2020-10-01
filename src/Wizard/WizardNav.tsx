import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import { IWizardStep } from "./types";

interface WizardNavProps {
  steps: Array<IWizardStep>;
  activeStep: IWizardStep;
  onChange: (step: IWizardStep) => void;
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
            <ListItemIcon>
              { step.validate() && <StarBorder /> }
              { !step.validate() && <StarBorder color={"error"} />}
            </ListItemIcon>
            <ListItemText primary={step.name} />
          </ListItem>
        );
      })}
    </List>
  );
};
