import { View } from "react-native"
import type { WithBordersProps } from "../../types/with-borders.type"
import React from "react"
/**
 * Higher Order Component that adds borders to a wrapped component if the withBorders prop is true.
 *
 * @param WrappedComponent - The component to be wrapped.
 * @returns A new component with an optional border.
 */
export const withBorders = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ComponentWithBorders = (props: P & WithBordersProps) => {
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

  // Set a display name for the wrapped component
  ComponentWithBorders.displayName = `withBorders(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`

  return ComponentWithBorders
}
