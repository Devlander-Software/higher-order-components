import React from "react";
import type { ScaledSize } from "react-native";
export interface ScreenDimensions {
    window: ScaledSize;
    screen: ScaledSize;
}
export interface WithDimensionsProps {
    dimensions: ScreenDimensions;
}
export declare const withDimensions: <P extends object>(Component: React.ComponentType<P & WithDimensionsProps>) => React.FC<P>;
