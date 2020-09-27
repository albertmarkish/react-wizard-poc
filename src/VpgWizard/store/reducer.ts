import * as types from "./types";
import { Action } from "./actions";
import { ManageVpgInfoVisualObject } from "./initialState";

const reducer = (state: ManageVpgInfoVisualObject, action: Action): ManageVpgInfoVisualObject => {
    const { type, payload } = action;
    //console.log("Reducer executing",type, payload);
    switch (type) {
        case types.UPDATE_INFO:
            return {
                ...state,
                Config: {
                    Name: payload.Config.Name,
                    Description: payload.Config.Description,
                    Priority: payload.Config.Priority
                }
            };
        case types.UPDATE_REPLICATION:
            return {
                ...state,
                Replication: {
                    TargetRegionId: payload.Replication.TargetRegionId
                }
            }
        default:
            return state;
    }
};
export default reducer;
