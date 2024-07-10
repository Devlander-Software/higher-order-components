import { useVisibilitySensor } from "@devlander/hooks"
import type { ComponentType, Ref } from "react"
import React, { forwardRef, useState } from "react"
import { View, Platform } from "react-native"

const isWeb = Platform.OS === "web"

type WithVisibilitySensorProps = {
  isVisible: boolean
}

export function withVisibilitySensor<P>(
  WrappedComponent: ComponentType<P & WithVisibilitySensorProps>,
) {
  const WithVisibilitySensorComponent = (props: P, ref: Ref<any>) => {
    const [isVisible, setIsVisible] = useState(false)
    const visibilitySensorRef = useVisibilitySensor((visible: boolean) => {
      setIsVisible(visible)
    })

    const Container = isWeb ? "div" : View

    return (
      <Container ref={visibilitySensorRef as any}>
        <WrappedComponent {...props} ref={ref} isVisible={isVisible} />
      </Container>
    )
  }

  // Forward refs to the WrappedComponent
  const forwardRefComponent = forwardRef(WithVisibilitySensorComponent)

  // Set display name for easier debugging
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  forwardRefComponent.displayName = `withVisibilitySensor(${wrappedComponentName})`

  return forwardRefComponent
}
