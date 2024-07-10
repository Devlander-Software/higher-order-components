import { useViewSize } from "@devlander/hooks"
import type { ComponentType } from "react"
import { forwardRef } from "react"
import type { LayoutRectangle } from "react-native"
import { View } from "react-native"

export function withViewSize<P>(
  WrappedComponent: ComponentType<P & { size: LayoutRectangle }>,
) {
  const withViewSizeComponent = (props: P) => {
    const [size, onLayout] = useViewSize()

    return (
      <View
        style={{
          alignSelf: "flex-start",
          justifyContent: "flex-start",
        }}
        onLayout={onLayout}
      >
        <WrappedComponent {...props} size={size} />
      </View>
    )
  }

  // Forward refs to the WrappedComponent
  const forwardRefComponent = forwardRef(withViewSizeComponent)

  // Set display name for easier debugging
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  forwardRefComponent.displayName = `withViewSize(${wrappedComponentName})`

  return forwardRefComponent
}
