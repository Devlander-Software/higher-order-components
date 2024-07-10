/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react"
import {
  Text,
  View,
  TouchableOpacity,
  TextProps,
  ViewProps,
  TextStyle,
  ViewStyle,
} from "react-native"
import {
  TextButtonContainerStyled,
  TextButtonContent,
  TextForTextButton,
} from "./TextButton.styles"

// TextButton component implementation
export interface TextButtonInterfaceProps {
  containerStyle?: ViewProps["style"]
  textStyle?: TextProps["style"]
  backgroundColor?: string
  textColor?: string
  fontSize?: number
  contentStyle?: ViewProps["style"]
  maxFontSize?: number
  fontWeight?: TextStyle["fontWeight"]
  textTransform?: TextStyle["textTransform"]
  textDecorationLine?: TextStyle["textDecorationLine"]
  onPress: () => void
  disabled?: boolean
  text: string
}

export const TextButton: React.FC<TextButtonInterfaceProps> = ({
  fontWeight,
  textTransform,
  textDecorationLine,
  maxFontSize,
  fontSize,
  disabled,
  contentStyle,
  backgroundColor,
  textColor,
  textStyle,
  text,
  onPress,
  containerStyle,
}) => {
  const flexDirection = "row"
  const iconPadding = 15
  const textMarginLeftRight = iconPadding - 5

  const parentTextStyles: TextStyle = useMemo(
    () => ({
      marginLeft: textMarginLeftRight,
      marginRight: textMarginLeftRight,
      textDecorationLine: textDecorationLine || "none",
      textTransform: textTransform || "none",
      backgroundColor: backgroundColor || undefined,
      color: textColor || undefined,
      ...(textStyle as object),
    }),
    [
      textMarginLeftRight,
      textDecorationLine,
      textTransform,
      backgroundColor,
      textColor,
      textStyle,
    ],
  )

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <TextButtonContent
        flexDirection={flexDirection}
        backgroundColor={backgroundColor}
        style={contentStyle}
      >
        <TextForTextButton
          style={parentTextStyles}
          color={textColor}
          fontSize={fontSize}
          maxFontSize={maxFontSize}
          fontWeight={fontWeight}
        >
          {text}
        </TextForTextButton>
      </TextButtonContent>
    </TouchableOpacity>
  )
}
