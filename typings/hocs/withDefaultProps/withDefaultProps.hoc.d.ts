import type { ComponentType } from "react";
/**
 * Higher-Order Component to add default props to a component
 * @param defaultProps - The default props to apply
 * @returns A function that takes a component and returns a new component with default props
 */
export declare const withDefaultProps: <P extends object>(defaultProps: Partial<P>) => (WrappedComponent: ComponentType<P>) => ComponentType<P>;
