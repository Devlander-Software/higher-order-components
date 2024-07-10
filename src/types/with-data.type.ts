export interface DataErrorMap {
  [key: string]: string
}

export type FetchStatus = "fetching" | "paused" | "idle"

export type DataStatus = "error" | "loading" | "success"

export interface DataItem<DataType = unknown, ErrorType = DataErrorMap> {
  data: DataType
  fetching: boolean
  fetchStatus: FetchStatus
  isFetched: boolean
  isError?: boolean
  enabled?: boolean
  isPending?: boolean
  isSuccess?: boolean
  status?: DataStatus
  error?: ErrorType // Optional error property to handle errors
  refresh?: () => void // Optional refresh method
  refreshing?: boolean // Optional refreshing property
  lastUpdatedAt?: number // Optional lastUpdatedAt property
}

export type DataCollection<KeyType extends string = string> = {
  [key in KeyType]: DataItem<unknown, DataErrorMap>
}

export interface AdditionalDataContainer<
  DataType = unknown,
  KeyType extends string = string,
> {
  additionalData: DataCollection<KeyType>
  // Use a mapped type to allow other properties dynamically
  [key: string]: DataItem<DataType> | unknown
}

export interface ListDataItem<T> extends DataItem<T[]> {
  fetching: boolean
  isFetched: boolean
  refresh: () => void // Optional refresh method
  refreshing: boolean // Optional refreshing property
  lastUpdatedAt?: number // Optional lastUpdatedAt property
}

export interface SingleDataResponse<T> extends DataItem<T> {
  fetching: boolean
  isFetched: boolean
  refresh: () => void // Optional refresh method
  refreshing: boolean // Optional refreshing property
  lastUpdatedAt?: number // Optional lastUpdatedAt property
}
