import type { LayoutStyleProperties } from "@devlander/styled-components-theme"
import type { ViewStyle } from "react-native"

export type ContainerStyle = ViewStyle | ViewStyle[]
export type ContainerStyleFromTheme = LayoutStyleProperties<number>

export interface ContainerStyleProps {
  containerStyleFromTheme?: ContainerStyleFromTheme
  containerStyle?: ContainerStyle
}
