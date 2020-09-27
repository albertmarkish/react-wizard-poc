import React from "react";
import { IWizardStep } from "../../Wizard/types";
import { GeneralStep } from "./Components/GeneralStep";

const VpgGeneralStepDefinition: IWizardStep = {
    name: "VPG General Info",
    component: <GeneralStep />,
    index: 0,
    onLoad: () => {
        alert("onLoad callback executing");
    }
}

export default VpgGeneralStepDefinition;