import React from "react";
import type { TextStylePropsNative, UITextStylingAttributes } from "@devlander/styled-components-theme";
export interface BaseTextProps extends Partial<UITextStylingAttributes<any>> {
    children?: JSX.Element | JSX.Element[] | string | any;
    fontSize?: number;
    textStyle?: TextStylePropsNative;
    lineHeight?: number;
    disabled?: boolean;
    adjustsFontSizeToFit?: boolean;
    textStyleFromTheme?: UITextStylingAttributes<number>;
    maxFontSize?: number;
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined;
    numberOfLines?: number;
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}
export declare const BaseText: React.FC<BaseTextProps>;
