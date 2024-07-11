import React, { ComponentType } from 'react';
import { getDisplayName } from '../../utils/getDisplayName.util';

/**
 * Higher-Order Component to add default props to a component
 * @param defaultProps - The default props to apply
 * @returns A function that takes a component and returns a new component with default props
 */
const withDefaultProps = <P extends object>(defaultProps: Partial<P>) => (
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const WithDefaultPropsComponent: React.FC<P> = (props) => {
    return <WrappedComponent {...defaultProps} {...props} />;
  };

  WithDefaultPropsComponent.displayName = `WithDefaultProps(${getDisplayName(WrappedComponent)})`;

  return WithDefaultPropsComponent;
};


export default withDefaultProps;
