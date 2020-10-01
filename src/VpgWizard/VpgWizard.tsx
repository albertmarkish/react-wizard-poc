import React, { useReducer } from "react";
import {Wizard} from "../Wizard/Wizard";

import getVpgGeneralStep from "./steps/GeneralStep";
import VpgVmsStep from "./steps/VmsStep";
import VpgReplicationStep from "./steps/ReplicationStep";

import VPGContext from "./store/context";
import initialState from "./store/initialState";
import reducer from "./store/reducer";

export const VpgWizard: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <VPGContext.Provider value={{ state, dispatch }}>
            <Wizard
                title={"Create/Edit VPG " + state.Config.Name}
                steps={[getVpgGeneralStep(state), VpgVmsStep, VpgReplicationStep]}
            />
        </VPGContext.Provider>
    );
}