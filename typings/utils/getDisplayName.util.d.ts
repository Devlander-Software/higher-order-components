import type { ComponentType } from "react";
/**
 * Helper function to get the display name of a component
 * @param WrappedComponent - The component to get the display name of
 * @returns The display name of the component
 */
export declare const getDisplayName: <P extends object>(WrappedComponent: ComponentType<P>) => string;
