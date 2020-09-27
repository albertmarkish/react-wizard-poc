import React from "react";
import { IWizardStep } from "../../Wizard/types";
import { VmsStep } from "./VmsStep";

const VmsStepDefinition: IWizardStep = {
    name: "VPG VMs Management",
    component: <VmsStep />,
    index: 1,
}

export default VmsStepDefinition;