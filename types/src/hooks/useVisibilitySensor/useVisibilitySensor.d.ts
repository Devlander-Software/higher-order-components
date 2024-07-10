/// <reference types="react" />
import type { View } from "react-native"
/**
 * A hook that monitors the visibility of a native React component within the viewport.
 * It tracks the dimensions of the target component and determines if it's entirely visible.
 *
 * @param onChange - Callback that fires when the visibility status of the component changes.
 * @returns A ref that should be attached to the component being observed.
 *
 * @example
 * const viewRef = useVisibilitySensor(isVisible => console.log(isVisible));
 * <View ref={viewRef} />
 */
export interface UseVisibilitySensorOptions<T> {
  (onChange: (visible: boolean) => void): React.RefObject<T>
}
export type UseVisibilitySensorNative = UseVisibilitySensorOptions<View>
export type UseVisibilitySensorWeb = UseVisibilitySensorOptions<any>
export declare const useVisibilitySensor: UseVisibilitySensorNative
export default useVisibilitySensor
