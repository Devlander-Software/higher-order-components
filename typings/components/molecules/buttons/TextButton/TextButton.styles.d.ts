import React from "react";
import { TextProps, ViewProps, TextStyle } from "react-native";
import { TextButtonContainerStyledProps, TextButtonContentProps } from "./TextButton.types";
export interface TextForTextButtonProps extends TextProps {
    color?: string;
    fontSize?: number;
    maxFontSize?: number;
    fontWeight?: TextStyle["fontWeight"];
}
export declare const TextForTextButton: React.FC<TextForTextButtonProps>;
export declare const TextButtonContainerStyled: React.FC<TextButtonContainerStyledProps>;
export declare const TextButtonContent: React.FC<TextButtonContentProps>;
export interface IconWrapperProps extends ViewProps {
    padding?: number;
}
export declare const IconWrapper: React.FC<IconWrapperProps>;
