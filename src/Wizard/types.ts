import React from "react";

export interface IWizardStep {
    name: string;
    component: React.ReactNode;
    onLoad?: () => void;
    index: number;
}
