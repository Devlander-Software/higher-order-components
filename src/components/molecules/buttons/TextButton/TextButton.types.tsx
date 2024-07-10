import type {
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
} from "react-native"

export interface TextButtonContentProps extends ViewProps {
  flexDirection: "row" | "column"
  backgroundColor?: string
  children?: React.ReactNode
}

export interface TextButtonContainerStyledProps extends TouchableOpacityProps {
  backgroundColor?: string
  alignSelf?: "auto" | "center" | "flex-start" | "flex-end"
  children?: React.ReactNode
  style?: TouchableOpacityProps["style"]
}

export interface TextForTextButtonProps extends TextProps {
  color?: string
  fontSize?: number
  maxFontSize?: number
  fontWeight?: TextStyle["fontWeight"]
}
