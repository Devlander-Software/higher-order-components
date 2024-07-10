import React, { useMemo } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextProps,
  ViewProps,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import stylex from "@stylexjs/stylex";
import {
  TextButtonContainerStyledProps,
  TextButtonContentProps,
  TextForTextButtonProps,
} from "./TextButton.types";

const baseTextStyles = stylex.create({
  text: {
    color: "black",
  },
});

const baseContainerStyles = stylex.create({
  container: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
  },
});

const baseContentStyles = stylex.create({
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

const baseWrapperStyles = stylex.create({
  wrapper: {
    padding: 10,
  },
});

export const TextForTextButton: React.FC<TextForTextButtonProps> = ({
  color = "black",
  fontSize = 15,
  maxFontSize = 17,
  children,
  style,
  ...props
}) => {
  const dynamicTextStyle: TextStyle = useMemo(() => ({
    fontSize,
    maxFontSize,
    color,
  }), [fontSize, maxFontSize, color]);

  const combinedStyles = useMemo(() => [
    baseTextStyles.text,
    dynamicTextStyle,
    style,
  ], [dynamicTextStyle, style]);

  return (
    <Text style={StyleSheet.flatten(combinedStyles)} {...props}>
      {children}
    </Text>
  );
};

export const TextButtonContainerStyled: React.FC<TextButtonContainerStyledProps> = ({
  backgroundColor = "transparent",
  alignSelf = "flex-start",
  children,
  style,
  ...props
}) => {
  const dynamicContainerStyle: ViewStyle = useMemo(() => ({
    backgroundColor,
    alignSelf,
  }), [backgroundColor, alignSelf]);

  const combinedStyles = useMemo(() => [
    baseContainerStyles.container,
    dynamicContainerStyle,
    style,
  ], [dynamicContainerStyle, style]);

  return (
    <TouchableOpacity style={StyleSheet.flatten(combinedStyles)} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const TextButtonContent: React.FC<TextButtonContentProps> = ({
  flexDirection,
  backgroundColor = "transparent",
  children,
  style,
  ...props
}) => {
  const dynamicContentStyle: ViewStyle = useMemo(() => ({
    flexDirection,
    backgroundColor,
  }), [flexDirection, backgroundColor]);

  const combinedStyles = useMemo(() => [
    baseContentStyles.content,
    dynamicContentStyle,
    style,
  ], [dynamicContentStyle, style]);

  return (
    <View style={StyleSheet.flatten(combinedStyles)} {...props}>
      {children}
    </View>
  );
};

export interface IconWrapperProps extends ViewProps {
  padding?: number;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  padding = 10,
  children,
  style,
  ...props
}) => {
  const dynamicWrapperStyle: ViewStyle = useMemo(() => ({
    padding,
  }), [padding]);

  const combinedStyles = useMemo(() => [
    baseWrapperStyles.wrapper,
    dynamicWrapperStyle,
    style,
  ], [dynamicWrapperStyle, style]);

  return (
    <View style={StyleSheet.flatten(combinedStyles)} {...props}>
      {children}
    </View>
  );
};
