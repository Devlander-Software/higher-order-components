/**
 * Higher-order component that provides media query information to the wrapped component.
 *
 * @template TProps - The props type of the wrapped component.
 * @param {ComponentType<TProps & WithMediaQueryProps>} Component - The component to be wrapped.
 * @returns {React.FC<TProps>} - The wrapped component.
 */
import type { MediaQueryBreakpointConfig } from "@devlander/hooks"
import { useGetMediaQueryInfo } from "@devlander/hooks"
import type { ComponentType } from "react"
import React from "react"

export interface WithMediaQueryProps {
  mediaQueryInfo: MediaQueryBreakpointConfig
}

function withMediaQueryInfo<TProps>(
  Component: ComponentType<TProps & WithMediaQueryProps>,
) {
  const WrappedComponent: React.FC<TProps> = (props) => {
    const mediaQueryInfo = useGetMediaQueryInfo()

    return <Component {...props} mediaQueryInfo={mediaQueryInfo} />
  }

  WrappedComponent.displayName = `withMediaQueryInfo(${
    Component.displayName || Component.name || "Component"
  })`

  return WrappedComponent
}

export default withMediaQueryInfo
