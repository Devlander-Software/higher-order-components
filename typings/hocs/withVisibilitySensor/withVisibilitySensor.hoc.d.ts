import { VisibilityOffset } from "@devlander/hooks";
import type { ComponentType } from "react";
import React from "react";
interface WithVisibilitySensorProps {
    isVisible: boolean;
    visibilityOffset?: VisibilityOffset;
    checkInterval?: number;
    stopWatching?: boolean;
}
export declare function withVisibilitySensor<P>(WrappedComponent: ComponentType<P & WithVisibilitySensorProps>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P & WithVisibilitySensorProps> & React.RefAttributes<any>>;
export {};
