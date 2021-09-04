import React, { Component } from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'react-input';

export interface EventTarget {
  target: {
    value: any;
  };
}

export interface ReactInputProps
  extends Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * The changed handler.
   */
  onChange?: (inEvent: EventTarget) => void;
  /**
   * Reference to original ref instance(tag: dom).
   */
  forwardedRef?: any;
}

class ReactInput extends Component<ReactInputProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';

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
