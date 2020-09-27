import { createContext, Dispatch } from "react";
import { Action } from "./actions";
import initialState, { ManageVpgInfoVisualObject } from "./initialState";

interface VPGContextProps {
    state: ManageVpgInfoVisualObject;
    dispatch: Dispatch<Action>;
}

const VPGContext = createContext<VPGContextProps>({
    dispatch: () => {
        // Dispatch initial value
    },
    state: initialState,
});

export default VPGContext;
