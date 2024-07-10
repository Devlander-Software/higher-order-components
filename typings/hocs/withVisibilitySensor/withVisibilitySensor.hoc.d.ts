import React, { ComponentType } from "react";
type WithVisibilitySensorProps = {
    isVisible: boolean;
};
export declare function withVisibilitySensor<P>(WrappedComponent: ComponentType<P & WithVisibilitySensorProps>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<any>>;
export {};