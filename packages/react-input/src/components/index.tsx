import React, { Component } from 'react';
import classNames from 'classnames';
import noop from '@jswork/noop';

const CLASS_NAME = 'react-input';

export interface ReactInputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Reference to original ref instance(tag: dom).
   */
  forwardedRef?: any;
}

class ReactInput extends Component<ReactInputProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';

  static defaultProps = {
    onChange: noop
  };

  render(): React.ReactNode {
    const { className, forwardedRef, ...props } = this.props;
    return (
      <input
        ref={forwardedRef}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}

export default React.forwardRef((props: ReactInputProps, ref: any) => (
  <ReactInput {...props} ref={ref} />
));
