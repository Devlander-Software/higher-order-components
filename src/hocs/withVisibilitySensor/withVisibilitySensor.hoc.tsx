import { useVisibilitySensor, VisibilityOffset, UseVisibilityOptionsConfig } from "@devlander/hooks";
import type { ComponentType, Ref } from "react";
import React, { forwardRef, useState, useMemo } from "react";
import { View, Platform } from "react-native";

const isWeb = Platform.OS === "web";

// Default prop values
const defaultVisibilityOffset = VisibilityOffset.FULL;
const defaultCheckInterval = 1000;
const defaultStopWatching = false;

type WithVisibilitySensorProps = {
  isVisible: boolean;
  visibilityOffset?: VisibilityOffset;
  checkInterval?: number;
  stopWatching?: boolean;
};

export function withVisibilitySensor<P>(
  WrappedComponent: ComponentType<P & WithVisibilitySensorProps>,
) {
  const WithVisibilitySensorComponent = (
    props: P & WithVisibilitySensorProps,
    ref: Ref<any>
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    // Memoize config options and allow them to update if props change
    const visibilityConfig: UseVisibilityOptionsConfig = useMemo(() => {
      return {
        visibilityOffset: props.visibilityOffset ?? defaultVisibilityOffset,
        checkInterval: props.checkInterval ?? defaultCheckInterval,
      };
    }, [props.visibilityOffset, props.checkInterval]);

    const visibilitySensorRef = useVisibilitySensor(
      (visible: boolean) => {
        setIsVisible(visible);
      },
      visibilityConfig,
      props.stopWatching ?? defaultStopWatching
    );

    const Container = isWeb ? "div" : View;

    return (
      <Container ref={visibilitySensorRef as any}>
        <WrappedComponent {...props} ref={ref} isVisible={isVisible} />
      </Container>
    );
  };

  // Forward refs to the WrappedComponent
  const forwardRefComponent = forwardRef(WithVisibilitySensorComponent);

  // Set display name for easier debugging
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  forwardRefComponent.displayName = `withVisibilitySensor(${wrappedComponentName})`;

  return forwardRefComponent;
}
