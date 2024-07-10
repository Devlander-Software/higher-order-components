export interface LoadingIndicatorOnBackdropProps {
    submitting: boolean;
    message?: string;
    showCloseOptionAfterSeconds?: number;
}
export declare const LoadingIndicatorOnBackdrop: {
    (props: LoadingIndicatorOnBackdropProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: LoadingIndicatorOnBackdropProps;
};
export declare const DefaultPropsForLoadingIndicatorOnBackdrop: LoadingIndicatorOnBackdropProps;
