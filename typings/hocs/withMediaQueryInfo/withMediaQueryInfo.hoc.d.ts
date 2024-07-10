/**
 * Higher-order component that provides media query information to the wrapped component.
 *
 * @template TProps - The props type of the wrapped component.
 * @param {ComponentType<TProps & WithMediaQueryProps>} Component - The component to be wrapped.
 * @returns {React.FC<TProps>} - The wrapped component.
 */
import { MediaQueryBreakpointConfig } from "@devlander/hooks";
import type { ComponentType } from "react";
import React from "react";
export interface WithMediaQueryProps {
    mediaQueryInfo: MediaQueryBreakpointConfig;
}
declare function withMediaQueryInfo<TProps>(Component: ComponentType<TProps & WithMediaQueryProps>): React.FC<TProps>;
export default withMediaQueryInfo;
