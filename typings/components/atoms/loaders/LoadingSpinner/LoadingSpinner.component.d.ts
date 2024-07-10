import type { ActivityIndicatorProps } from "react-native";
export interface LoadingSpinnerProps extends ActivityIndicatorProps {
    size: ActivityIndicatorProps["size"];
}
export declare const LoadingSpinner: {
    (props: LoadingSpinnerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        size: string;
    };
};
