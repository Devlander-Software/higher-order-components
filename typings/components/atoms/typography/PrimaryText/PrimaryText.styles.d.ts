import React from "react";
import type { TextProps } from "react-native";
export interface PrimaryTextProps extends TextProps {
    textColor?: string;
    onDark?: boolean;
    containerBoxShadowX?: number;
    containerBoxShadowY?: number;
    containerBoxShadowBlurRadius?: number;
    containerBoxShadowColor?: string;
}
export declare const PrimaryTextStyled: React.FC<PrimaryTextProps>;
