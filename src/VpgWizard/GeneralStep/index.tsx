import React from "react";
import {IWizardStep} from "../../Wizard/types";
import {GeneralStep} from "./Components/GeneralStep";
import {Schema} from "./schema";

const VpgGeneralStepDefinition: IWizardStep = {
    name: "VPG General Info",
    component: <GeneralStep meta={{modelSchema:Schema}}/>,
    modelSchema: Schema,
    index: 0,
}

export default VpgGeneralStepDefinition;