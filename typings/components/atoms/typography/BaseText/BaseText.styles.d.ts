import React from "react";
import { TextProps } from "react-native";
export interface BaseTextStyledInterface extends TextProps {
    children?: TextProps["children"];
    testID?: TextProps["testID"];
    adjustsFontSizeToFit?: boolean;
    ellipsizeMode?: TextProps["ellipsizeMode"];
    disabled?: boolean;
}
export declare const BaseTextStyled: React.FC<BaseTextStyledInterface>;
