import React from "react";
import { IWizardStep } from "../../Wizard/types";
import { ReplicationStep } from "./ReplicationStep";

const VpgReplicationStepDefinition: IWizardStep = {
    name: "Replication Settings",
    component: <ReplicationStep />,
    index: 2,
};

export default VpgReplicationStepDefinition;