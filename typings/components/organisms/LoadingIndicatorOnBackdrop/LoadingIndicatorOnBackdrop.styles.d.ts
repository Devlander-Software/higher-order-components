import React, { FC } from "react";
import { ViewProps, StyleProp, ViewStyle } from "react-native";
type UnifiedStyle = StyleProp<ViewStyle> | any;
export interface SubmittingScreenInterface extends ViewProps {
    submitting?: boolean;
    children?: React.ReactNode;
    style?: UnifiedStyle;
}
export declare const LoadingBackdropContainer: FC<SubmittingScreenInterface>;
export {};
