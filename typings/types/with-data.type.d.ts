export interface DataErrorMap {
    [key: string]: string;
}
export type FetchStatus = "fetching" | "paused" | "idle";
export type DataStatus = "error" | "loading" | "success";
export interface DataItem<DataType = unknown, ErrorType = DataErrorMap> {
    data: DataType;
    fetching: boolean;
    fetchStatus: FetchStatus;
    isFetched: boolean;
    isError?: boolean;
    enabled?: boolean;
    isPending?: boolean;
    isSuccess?: boolean;
    status?: DataStatus;
    error?: ErrorType;
    refresh?: () => void;
    refreshing?: boolean;
    lastUpdatedAt?: number;
}
export type DataCollection<KeyType extends string = string> = {
    [key in KeyType]: DataItem<unknown, DataErrorMap>;
};
export interface AdditionalDataContainer<DataType = unknown, KeyType extends string = string> {
    additionalData: DataCollection<KeyType>;
    [key: string]: DataItem<DataType> | unknown;
}
export interface ListDataItem<T> extends DataItem<T[]> {
    fetching: boolean;
    isFetched: boolean;
    refresh: () => void;
    refreshing: boolean;
    lastUpdatedAt?: number;
}
export interface SingleDataResponse<T> extends DataItem<T> {
    fetching: boolean;
    isFetched: boolean;
    refresh: () => void;
    refreshing: boolean;
    lastUpdatedAt?: number;
}
