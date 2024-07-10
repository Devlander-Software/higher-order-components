import type { LayoutChangeEvent, LayoutRectangle } from "react-native"
export declare const useViewSize: () => [
  LayoutRectangle,
  (event: LayoutChangeEvent) => void,
]
export default useViewSize
