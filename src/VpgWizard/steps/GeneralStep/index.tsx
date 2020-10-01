import React from "react";
import {IWizardStep} from "../../../Wizard/types";
import {GeneralStep} from "./GeneralStep";
import {Schema} from "./schema";

// const VpgGeneralStepDefinition: IWizardStep = {
//     name: "VPG General Info",
//     component: <GeneralStep meta={{modelSchema: Schema}}/>,
//     modelSchema: Schema,
//     index: 0,
// }

const getVpgGeneralStepDefinition = (state:unknown) => {
    return {
        name: "VPG General Info",
        component: <GeneralStep meta={{modelSchema: Schema}}/>,
        modelSchema: Schema,
        index: 0,
        validate: () => {
            return true;
        }
    }
}

export default getVpgGeneralStepDefinition;