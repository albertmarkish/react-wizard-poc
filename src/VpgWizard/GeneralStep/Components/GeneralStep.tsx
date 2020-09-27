import React, {useContext} from "react";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import VPGContext from "../../store/context";
import {UPDATE_INFO} from "../../store/types";

export const GeneralStep: React.FC = () => {

    console.log("GeneralStep Render");

    const {state, dispatch} = useContext(VPGContext);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: UPDATE_INFO,
            payload: {
                ...state,
                Config: {
                    ...state.Config,
                    Name: e.target.value
                },
            }
        });
    }

    const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: UPDATE_INFO,
            payload: {
                ...state,
                Config: {
                    ...state.Config,
                    Description: e.target.value
                },
            }
        });
    }

    return (
        <Box display="flex" flexDirection="column" height="100%" alignItems="center">
            <h2>VPG General Info</h2>
            <Box display="flex" flexDirection="column" width="25vw" flexGrow="1" justifyContent="center">
                <TextField id="vpgName" label="VPG Name" variant="outlined" required margin="normal" value={state.Config.Name}
                           onChange={onNameChange}/>
                <TextField id="vpgDescription" label="VPG Description" variant="outlined" multiline rows="4"
                           value={state.Config.Description}
                           onChange={onDescriptionChange}/>
            </Box>
        </Box>
    );
};