import type { ComponentType } from "react"
import React from "react"
import { View } from "react-native"
import { WithBordersProps } from "../../types/with-borders.type"

/**
 * Higher Order Component that adds borders to a wrapped component if the withBorders prop is true.
 *
 * @param WrappedComponent - The component to be wrapped.
 * @returns A new component with an optional border.
 */
export const withBorders = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  return (props: P & WithBordersProps) => {
    const { withBorders = false, borderColor = "red", ...otherProps } = props

    if (withBorders) {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: borderColor,
            alignSelf: "flex-start",
          }}
        >
          <WrappedComponent {...(otherProps as P)} withBorders={true} />
        </View>
      )
    }

    return <WrappedComponent {...(otherProps as P)} />
  }
}
