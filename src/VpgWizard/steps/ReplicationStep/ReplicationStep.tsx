import React, {useContext} from "react";
import Box from "@material-ui/core/Box";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {ReplicationStepProps} from "./types";

import {useGetPotentialRecoveryRegions} from "./hooks/useGetPotentialRecoveryRegions";
import VPGContext from "../../store/context";
import {UPDATE_REPLICATION} from "../../store/types";

export const ReplicationStep: React.FC<ReplicationStepProps> = () => {
    console.log("ReplicationStep Render");

    const { state, dispatch } = useContext(VPGContext);
    const potentialRecoveryRegions = useGetPotentialRecoveryRegions();

    const handleChange = (value:string) => {
        dispatch({
            type: UPDATE_REPLICATION,
            payload: {
                ...state,
                Replication: {
                    TargetRegionId: value
                }
            }
        });
    };

    return (
        <Box display="flex" flexDirection="column" width="25vw" height="100%" alignItems="center">
            <h2>Replication Settings</h2>
            <Box display="flex" flexDirection="column" width="25vw" flexGrow="1" justifyContent="center">
                <FormControl>
                    <InputLabel id="recovery-region-label">Recovery Region</InputLabel>
                    <Select labelId="recovery-region-label" id="recovery-region-select" value={potentialRecoveryRegions.length ? state.Replication.TargetRegionId : ''}
                            onChange={(e) => {handleChange(e.target.value as string)}}>
                        {potentialRecoveryRegions.map((region) => {
                            return <MenuItem value={region.id} key={region.id}>{region.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </Box >);
};