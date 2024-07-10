import type { ComponentType } from "react";
import React from "react";
export interface WithSpinnerProps {
    shouldSpin: boolean;
    spinnerComponent?: React.ComponentType;
}
export declare const withSpinner: <P extends object>(Component: ComponentType<P>) => React.FC<P & WithSpinnerProps>;
