import React from "react";
import {ObjectSchema} from "yup";

export interface IWizardStep {
    name: string;
    component: React.ReactNode;
    modelSchema?: ObjectSchema;
    validate?: () => void;
    index: number;
}
