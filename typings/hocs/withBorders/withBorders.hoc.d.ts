import type { WithBordersProps } from "../../types/with-borders.type";
import React from "react";
/**
 * Higher Order Component that adds borders to a wrapped component if the withBorders prop is true.
 *
 * @param WrappedComponent - The component to be wrapped.
 * @returns A new component with an optional border.
 */
export declare const withBorders: <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    (props: P & WithBordersProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
