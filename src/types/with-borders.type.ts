/**
 * Interface for the withBorders higher-order component props.
 *
 * @property withBorders - A boolean indicating if the component should have borders (true or false).
 * @property borderColor - The color of the border if withBorders is true.
 */
export interface WithBordersProps {
  withBorders?: boolean
  borderColor?: string
}
