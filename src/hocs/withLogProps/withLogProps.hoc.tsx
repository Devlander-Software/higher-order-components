import type { ComponentType } from "react"
import React from "react"

export function withLogProps<T>(Component: ComponentType<T>): ComponentType<T> {
  // Create the wrapper component
  const WithLogPropsWrapper: ComponentType<T> = (props) => {
    console.log("Actual Props: ", props)

    return <Component {...(props as React.PropsWithChildren<T>)} />
  }

  // Assign a display name for debugging purposes
  WithLogPropsWrapper.displayName = `withLogProps(${
    Component.displayName || Component.name || "Component"
  })`

  return WithLogPropsWrapper
}
