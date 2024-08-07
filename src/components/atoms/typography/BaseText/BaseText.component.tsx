import React, { useMemo } from "react"
import type { TextStyle } from "react-native"
import { BaseTextStyled } from "./BaseText.styles"
import { useGetMediaQueryInfo } from "@devlander/hooks"
import type {
  TextStylePropsNative,
  UITextStylingAttributes,
} from "@devlander/styled-components-theme"

export interface BaseTextProps extends Partial<UITextStylingAttributes<any>> {
  children?: JSX.Element | JSX.Element[] | string | any
  fontSize?: number
  textStyle?: TextStylePropsNative
  lineHeight?: number
  disabled?: boolean
  adjustsFontSizeToFit?: boolean
  textStyleFromTheme?: UITextStylingAttributes<number>
  maxFontSize?: number
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | undefined
  numberOfLines?: number
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined
}

export const BaseText: React.FC<BaseTextProps> = ({
  textStyleFromTheme = {},
  numberOfLines = 1,
  adjustsFontSizeToFit = false,
  ellipsizeMode = "tail",
  children = "",
  maxFontSize = 13,
  fontSize: fontSizeFromProps,
  textStyle = {},
  textTransform,
  disabled,
}: BaseTextProps) => {
  const fontSize = useMemo(
    () =>
      textStyleFromTheme && textStyleFromTheme.fontSize
        ? textStyleFromTheme.fontSize
        : textStyle && textStyle.fontSize
          ? textStyle.fontSize
          : fontSizeFromProps
            ? fontSizeFromProps
            : 13,
    [textStyleFromTheme, textStyle, fontSizeFromProps],
  )

  const { medium, large } = useGetMediaQueryInfo()
  const isTablet = useMemo(() => medium && !large, [medium, large])

  const maxFontSizeToUse = useMemo(
    () =>
      isTablet
        ? fontSize
          ? fontSize
          : maxFontSize
        : fontSize && fontSize > maxFontSize
          ? fontSize / 2
          : maxFontSize,
    [isTablet, fontSize, maxFontSize],
  )

  const styleForText: TextStyle = useMemo(
    () => ({
      fontSize: fontSize,
      ...textStyle,
    }),
    [textStyle, fontSize],
  )

  return (
    <BaseTextStyled
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      ellipsizeMode={ellipsizeMode as any}
      numberOfLines={numberOfLines}
      maxFontSize={maxFontSizeToUse}
      fontSize={fontSize}
      testID={"base-text"}
      textTransform={textTransform}
      disabled={disabled}
      style={styleForText}
      {...textStyleFromTheme}
    >
      {children ? children : null}
    </BaseTextStyled>
  )
}
