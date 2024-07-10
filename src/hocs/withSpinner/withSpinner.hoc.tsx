import type { ComponentType } from "react"
import React from "react"
import { LoadingIndicatorOnBackdrop } from "../../components/organisms/LoadingIndicatorOnBackdrop/LoadingIndicatorOnBackdrop.component"

// Define the type for the additional prop that withSpinner will inject
export interface WithSpinnerProps {
  shouldSpin: boolean
  spinnerComponent?: React.ComponentType // component to render, defaults to LoadingIndicatorOnBackdrop
}

export const withSpinner = <P extends object>(Component: ComponentType<P>) => {
  // Define the type for the props of the wrapper component
  const WrapperComponent: React.FC<P & WithSpinnerProps> = (props) => {
    const {
      shouldSpin,
      spinnerComponent: SpinnerComponent = LoadingIndicatorOnBackdrop,
      ...restProps
    } = props

    if (shouldSpin) {
      return <SpinnerComponent />
    }

    return <Component {...(restProps as P)} />
  }

  // Assign a display name for debugging purposes
  const displayName = Component.displayName || Component.name || "Component"
  WrapperComponent.displayName = `withSpinner(${displayName})`

  return WrapperComponent
}
