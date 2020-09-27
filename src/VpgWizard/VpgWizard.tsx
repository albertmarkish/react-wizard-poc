import React, { useReducer } from "react";
import {Wizard} from "../Wizard/Wizard";

import VpgGeneralStep from "./GeneralStep";
import VpgVmsStep from "./VmsStep";
import VpgReplicationStep from "./ReplicationStep";

import VPGContext from "./store/context";
import initialState from "./store/initialState";
import reducer from "./store/reducer";

export const VpgWizard: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <VPGContext.Provider value={{ state, dispatch }}>
            <Wizard name="Hello Wizard" steps={[VpgGeneralStep, VpgVmsStep, VpgReplicationStep]}/>
        </VPGContext.Provider>
    );
}