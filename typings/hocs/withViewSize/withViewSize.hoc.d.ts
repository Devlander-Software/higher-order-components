import type { ComponentType } from "react";
import type { LayoutRectangle } from "react-native";
export declare function withViewSize<P>(WrappedComponent: ComponentType<P & {
    size: LayoutRectangle;
}>): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<unknown>>;
