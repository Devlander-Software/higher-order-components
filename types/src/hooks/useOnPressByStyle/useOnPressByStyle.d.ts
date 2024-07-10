import type { UseOnClickByStyleOptions } from "../../types/on-click-by-style-options.type"
interface UseOnClickNativeOptions extends UseOnClickByStyleOptions {
  styleName: string
  onPress: () => void
}
/**
 * `useOnClickByStyleNative` hook is designed to handle press actions on specific elements within a pressable area in React Native.
 * It ensures the action is only triggered when the user interacts with an element associated with a specific stylesheet name.
 *
 * @param {UseOnClickNativeOptions} options - The options for the hook.
 * @param {string} options.styleName - The stylesheet name to look for. Defaults to 'onClickStyle'.
 * @param {() => void} options.onPress - The callback function to execute when the desired style is pressed.
 *
 * @returns {Function} A handler function to be used in a pressable component.
 */
export declare function useOnPressByStyle({
  styleName,
  onPress,
}: UseOnClickNativeOptions): (event: any) => void
export default useOnPressByStyle
