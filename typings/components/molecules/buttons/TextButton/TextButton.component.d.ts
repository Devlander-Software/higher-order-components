import React from "react";
import { TextProps, ViewProps, TextStyle } from "react-native";
export interface TextButtonInterfaceProps {
    containerStyle?: ViewProps["style"];
    textStyle?: TextProps["style"];
    backgroundColor?: string;
    textColor?: string;
    fontSize?: number;
    contentStyle?: ViewProps["style"];
    maxFontSize?: number;
    fontWeight?: TextStyle["fontWeight"];
    textTransform?: TextStyle["textTransform"];
    textDecorationLine?: TextStyle["textDecorationLine"];
    onPress: () => void;
    disabled?: boolean;
    text: string;
}
export declare const TextButton: React.FC<TextButtonInterfaceProps>;