import React from "react";

export interface WizardStep {
  name: string;
  component?: React.FC;
}
