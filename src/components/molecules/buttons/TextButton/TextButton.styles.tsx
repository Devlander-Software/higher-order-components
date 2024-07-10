import React, { useMemo } from "react"
import type { ViewProps, TextStyle, ViewStyle } from "react-native"
import { Text, TouchableOpacity, View, TextProps } from "react-native"
import * as stylex from "@stylexjs/stylex"
import type {
  TextButtonContainerStyledProps,
  TextButtonContentProps,
  TextForTextButtonProps,
} from "./TextButton.types"

const styles = stylex.create({
  baseText: {
    color: "black",
  },
  baseContainer: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
  },
  baseContent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  baseWrapper: {
    padding: 10,
  },
})

export const TextForTextButton: React.FC<TextForTextButtonProps> = ({
  color = "black",
  fontSize = 15,
  maxFontSize = 17,
  children,
  style,
  ...props
}) => {
  const dynamicTextStyle: TextStyle = useMemo(
    () => ({
      fontSize,
      maxFontSize,
      color,
    }),
    [fontSize, maxFontSize, color],
  )

  return (
    <Text
      {...stylex.props(styles.baseText)}
      style={[dynamicTextStyle, style]}
      {...props}
    >
      {children}
    </Text>
  )
}

export const TextButtonContainerStyled: React.FC<
  TextButtonContainerStyledProps
> = ({
  backgroundColor = "transparent",
  alignSelf = "flex-start",
  children,
  style,
  ...props
}) => {
  const dynamicContainerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor,
      alignSelf,
    }),
    [backgroundColor, alignSelf],
  )

  return (
    <TouchableOpacity
      {...stylex.props(styles.baseContainer)}
      style={[dynamicContainerStyle, style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}

export const TextButtonContent: React.FC<TextButtonContentProps> = ({
  flexDirection = "row",
  backgroundColor,
  children,
  style,
  ...props
}) => {
  const dynamicContentStyle: ViewStyle = useMemo(
    () => ({
      flexDirection,
      backgroundColor,
    }),
    [flexDirection, backgroundColor],
  )

  return (
    <View
      {...stylex.props(styles.baseContent)}
      style={[dynamicContentStyle, style]}
      {...props}
    >
      {children}
    </View>
  )
}

export const TextButtonWrapper: React.FC<ViewProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View {...stylex.props(styles.baseWrapper)} style={style} {...props}>
      {children}
    </View>
  )
}
