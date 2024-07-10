import React, { useEffect, useState } from "react"
import type { ScaledSize } from "react-native"
import { Dimensions, View } from "react-native"

export interface ScreenDimensions {
  window: ScaledSize
  screen: ScaledSize
}

export interface WithDimensionsProps {
  dimensions: ScreenDimensions
}

export const withDimensions = <P extends object>(
  Component: React.ComponentType<P & WithDimensionsProps>,
) => {
  const WrapperComponent: React.FC<P> = (props) => {
    const [dimensions, setDimensions] = useState<ScreenDimensions>({
      window: Dimensions.get("window"),
      screen: Dimensions.get("screen"),
    })

    useEffect(() => {
      const onChange = ({
        window,
        screen,
      }: {
        window: ScaledSize
        screen: ScaledSize
      }) => {
        setDimensions({ window, screen })
      }

      // Subscribe to dimension changes
      const subscription = Dimensions.addEventListener("change", onChange)

      // Cleanup
      return () => subscription.remove()
    }, [])

    return (
      <View style={{ flex: 1 }}>
        <Component {...props} dimensions={dimensions} />
      </View>
    )
  }

  // Assign a display name for debugging purposes
  const displayName = Component.displayName || Component.name || "Component"
  WrapperComponent.displayName = `withScreenDimensions(${displayName})`

  return WrapperComponent
}
