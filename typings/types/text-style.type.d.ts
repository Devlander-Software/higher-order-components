import type { NativeTheme } from "@devlander/styled-components-theme";
import type { TextStyle } from "react-native";
import type { ThemedTextStylingProps, UITextStylingAttributes } from "@devlander/styled-components-theme";
export type DefaultTextStyle = TextStyle;
export type TextStyleFromTheme = ThemedTextStylingProps<NativeTheme, number> & UITextStylingAttributes<number>;
export interface TextStyleProps {
    textStyleFromTheme?: TextStyleFromTheme;
    textStyle?: DefaultTextStyle;
}
