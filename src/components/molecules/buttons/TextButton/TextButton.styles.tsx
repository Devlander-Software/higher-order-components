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
import {
  TextButtonContainerStyledProps,
  TextButtonContentProps,
  TextForTextButtonProps,
} from "./TextButton.types";

// Define styles using StyleSheet.create for better type compatibility
const baseTextStyles = StyleSheet.create({
  text: {
    color: "black",
  },
});

const baseContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
  },
});

const baseContentStyles = StyleSheet.create({
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

const baseWrapperStyles = StyleSheet.create({
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
  flexDirection = "row",
  backgroundColor,
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

export const TextButtonWrapper: React.FC<ViewProps> = ({
  children,
  style,
  ...props
}) => {
  const combinedStyles = useMemo(() => [
    baseWrapperStyles.wrapper,
    style,
  ], [style]);

  return (
    <View style={StyleSheet.flatten(combinedStyles)} {...props}>
      {children}
    </View>
  );
};