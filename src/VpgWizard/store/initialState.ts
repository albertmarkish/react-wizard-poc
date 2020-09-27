export interface ManageVpgInfoVisualObject {
    Config: {
        Name: string;
        Priority?: "high" | "medium" | "low";
        Description?: string;
    },
    Replication: {
        TargetRegionId: string
    }
}

const initialState: ManageVpgInfoVisualObject = {
    Config: {
        Name: "Test VPG 001",
        Priority: "high",
        Description: "Not so long description (up to 140)"
    },
    Replication: {
        TargetRegionId: "region_003"
    }
}

export default initialState;