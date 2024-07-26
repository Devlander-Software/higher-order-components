import type { LayoutStyleProperties } from "@devlander/styled-components-theme"
import type { ViewStyle } from "react-native"

export type ContainerStyle = ViewStyle | ViewStyle[] | undefined
export type ContainerStyleFromTheme = LayoutStyleProperties<number> | undefined

export interface ContainerStyleProps {
  containerStyleFromTheme?: ContainerStyleFromTheme
  containerStyle?: ContainerStyle
}
