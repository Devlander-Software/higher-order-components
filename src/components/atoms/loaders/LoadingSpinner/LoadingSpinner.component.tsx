import type { ActivityIndicatorProps } from "react-native"
import { StyledLoader } from "./LoadingSpinner.styles"

export interface LoadingSpinnerProps extends ActivityIndicatorProps {
  size: ActivityIndicatorProps["size"]
}

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  return <StyledLoader {...props} />
}

LoadingSpinner.defaultProps = {
  size: "large",
}
