import React, { useMemo } from "react"
import type { TextProps, StyleProp, TextStyle, ViewStyle } from "react-native"
import { Text, StyleSheet } from "react-native"
import stylex from "@stylexjs/stylex"

export interface PrimaryTextProps extends TextProps {
  textColor?: string
  onDark?: boolean
  containerBoxShadowX?: number
  containerBoxShadowY?: number
  containerBoxShadowBlurRadius?: number
  containerBoxShadowColor?: string
}

// Static base styles for text
const baseTextStyles = stylex.create({
  text: {
    color: "black",
  },
})

// Function to generate dynamic text styles
const generateDynamicTextStyle = ({
  textColor,
  onDark,
}: PrimaryTextProps): TextStyle => {
  return {
    color: textColor || (onDark ? "white" : "black"),
  }
}

// Function to generate dynamic container styles
const generateDynamicContainerStyle = ({
  containerBoxShadowX = 0,
  containerBoxShadowY = 0,
  containerBoxShadowBlurRadius = 0,
  containerBoxShadowColor = "rgba(0, 0, 0, 0)",
}: PrimaryTextProps): ViewStyle => {
  return {
    shadowColor: containerBoxShadowColor,
    shadowOffset: { width: containerBoxShadowX, height: containerBoxShadowY },
    shadowOpacity:
      containerBoxShadowX && containerBoxShadowY && containerBoxShadowBlurRadius
        ? 1
        : 0,
    shadowRadius: containerBoxShadowBlurRadius,
    elevation:
      containerBoxShadowX && containerBoxShadowY && containerBoxShadowBlurRadius
        ? 5
        : 0,
  }
}

export const PrimaryTextStyled: React.FC<PrimaryTextProps> = ({
  textColor,
  onDark,
  containerBoxShadowX,
  containerBoxShadowY,
  containerBoxShadowBlurRadius,
  containerBoxShadowColor,
  children,
  style,
  ...rest
}) => {
  const dynamicTextStyle = useMemo(
    () =>
      generateDynamicTextStyle({
        textColor,
        onDark,
      }),
    [textColor, onDark],
  )

  const dynamicContainerStyle = useMemo(
    () =>
      generateDynamicContainerStyle({
        containerBoxShadowX,
        containerBoxShadowY,
        containerBoxShadowBlurRadius,
        containerBoxShadowColor,
      }),
    [
      containerBoxShadowX,
      containerBoxShadowY,
      containerBoxShadowBlurRadius,
      containerBoxShadowColor,
    ],
  )

  const styles: StyleProp<ViewStyle> = useMemo(() => {
    const combinedStyles = StyleSheet.flatten([
      baseTextStyles.text,
      dynamicTextStyle,
      dynamicContainerStyle,
      style,
    ]) as StyleProp<ViewStyle>

    return combinedStyles
  }, [dynamicTextStyle, dynamicContainerStyle, style])

  return (
    <Text style={styles} {...rest}>
      {children}
    </Text>
  )
}

PrimaryTextStyled.defaultProps = {
  containerBoxShadowBlurRadius: 0,
  containerBoxShadowX: 0,
  containerBoxShadowY: 0,
  onDark: false,
}
