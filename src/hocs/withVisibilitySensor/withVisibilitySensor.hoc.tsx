import type { UseVisibilityOptionsConfig } from "@devlander/hooks"
import { useVisibilitySensor, VisibilityOffset } from "@devlander/hooks"
import type { ComponentType, Ref } from "react"
import React, { forwardRef, useState, useMemo } from "react"
import { View, Platform } from "react-native"

// Check if we are running on the web platform
const isWeb = Platform.OS === "web"

// Default prop values
const defaultVisibilityOffset = VisibilityOffset.FULL
const defaultCheckInterval = 1000
const defaultStopWatching = false

interface WithVisibilitySensorProps {
  isVisible: boolean
  visibilityOffset?: VisibilityOffset
  checkInterval?: number
  stopWatching?: boolean
}

export function withVisibilitySensor<P>(
  WrappedComponent: ComponentType<P & WithVisibilitySensorProps>,
) {
  const WithVisibilitySensorComponent = (
    props: P & WithVisibilitySensorProps,
    ref: Ref<any>,
  ) => {
    const [isVisible, setIsVisible] = useState(false)

    // Memoize config options and allow them to update if props change
    const visibilityConfig: UseVisibilityOptionsConfig = useMemo(() => {
      return {
        visibilityOffset: props.visibilityOffset ?? defaultVisibilityOffset,
        checkInterval: props.checkInterval ?? defaultCheckInterval,
      }
    }, [props.visibilityOffset, props.checkInterval])

    // Create a visibility sensor ref for the platform
    const visibilitySensorRef = useVisibilitySensor(
      (visible: boolean) => {
        setIsVisible(visible)
      },
      visibilityConfig,
      props.stopWatching ?? defaultStopWatching,
    )

    // Choose the correct container based on platform
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
