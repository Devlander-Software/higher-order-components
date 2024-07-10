import React from "react"
import { Text, TextProps, StyleSheet, StyleProp, TextStyle } from "react-native"
import stylex from "@stylexjs/stylex"

export interface BaseTextStyledInterface extends TextProps {
  children?: TextProps["children"]
  testID?: TextProps["testID"]
  adjustsFontSizeToFit?: boolean
  ellipsizeMode?: TextProps["ellipsizeMode"]
  disabled?: boolean
}

export const BaseTextStyled: React.FC<BaseTextStyledInterface> = ({
  children,
  style,
  ...rest
}) => {
  const baseTextStyle: StyleProp<TextStyle> = {
    color: "black", // Default text color
    // Add other text styles as needed
  }

  // Merge baseTextStyle with the style prop using StyleSheet.flatten
  const mergedStyles = StyleSheet.flatten([baseTextStyle, style])

  return (
    <Text style={mergedStyles} {...rest}>
      {children}
    </Text>
  )
}
