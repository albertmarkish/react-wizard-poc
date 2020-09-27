import React from "react";
import { Box, Button, ButtonGroup } from "@material-ui/core";

interface WizardFooterProps {
    isNextEnabled: boolean;
    isPreviousEnabled: boolean;
    showDone: boolean;
    onNext: () => void;
    onPrevious: () => void;
    onDone: () => void;
    onCancel: () => void;
}

export const WizardFooter: React.FC<WizardFooterProps> = ({
    isNextEnabled,
    isPreviousEnabled,
    showDone,
    onCancel,
    onPrevious,
    onNext,
    onDone
}) => {
    return (
        <Box display="flex" justifyContent="flex-end" alignItems="center" bgcolor="#ffcfdf" p="1rem">
            <Button onClick={onCancel}>Cancel</Button>
            <Box margin="0 1rem">
                <ButtonGroup>
                    <Button disabled={!isPreviousEnabled} variant="contained" onClick={onPrevious}>Previous</Button>
                    <Button disabled={!isNextEnabled} variant="contained" onClick={onNext}>Next</Button>
                </ButtonGroup>
            </Box>
            {showDone && <Button color="primary" variant="contained" onClick={onDone}>Done</Button>}
        </Box>);
};