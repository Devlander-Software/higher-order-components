import React, { FC, useMemo } from "react"
import { View, ViewProps, StyleSheet, StyleProp, ViewStyle } from "react-native"
import stylex from "@stylexjs/stylex"
import { useScreenDimensions } from "@devlander/hooks"

// Determine if running on web or React Native
const isWeb = typeof document !== "undefined"

// Create a unified type for styles
type UnifiedStyle = StyleProp<ViewStyle> | any

export interface SubmittingScreenInterface extends ViewProps {
  submitting?: boolean
  children?: React.ReactNode
  style?: UnifiedStyle
}

// Static styles for the container
const staticContainerStyles = stylex.create({
  container: {
    zIndex: 500,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
})

export const LoadingBackdropContainer: FC<SubmittingScreenInterface> =
  React.memo(({ submitting = false, children, style, ...rest }) => {
    const { width, height } = useScreenDimensions({ scaleType: "screen" })

    const dynamicStyles = useMemo(
      () => ({
        display: submitting ? "flex" : "none",
        width: `${width}px`,
        height: `${height}px`,
      }),
      [submitting, width, height],
    )

    const containerStyle: UnifiedStyle = useMemo(() => {
      // Merge additional styles
      const combinedStyle = [staticContainerStyles.container, dynamicStyles]
      if (style) {
        if (Array.isArray(style)) {
          return [...style, ...combinedStyle]
        } else {
          return StyleSheet.flatten([
            style as ViewStyle,
            ...combinedStyle,
          ]) as StyleProp<ViewStyle>
        }
      }
      return combinedStyle
    }, [style, dynamicStyles])

    return (
      <View style={containerStyle} {...rest}>
        {children}
      </View>
    )
  })
