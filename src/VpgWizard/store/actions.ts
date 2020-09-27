import * as types from "./types";
import { ManageVpgInfoVisualObject } from "./initialState";

export interface UpdateInfo {
    type: types.UPDATE_VPG;
    payload: ManageVpgInfoVisualObject;
}

export type Action = UpdateInfo;
