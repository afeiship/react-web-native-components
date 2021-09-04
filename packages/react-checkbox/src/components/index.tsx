import React, { Component } from 'react';
import classNames from 'classnames';
import noop from '@jswork/noop';
import classImperativeHandle from '@jswork/class-imperative-handle';
const CLASS_NAME = 'react-checkbox';

export interface EventTarget {
  target: {
    value: any;
  };
}

type BaseProps = Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'>;

export interface ReactCheckboxProps extends BaseProps {
  /**
   * The changed handler.
   */
  onChange?: (inEvent: EventTarget) => void;
  /**
   * The indeterminate for checkbox.
   */
  indeterminate?: boolean;
  /**
   * Default checked.
   */
  defaultChecked?: any;
  /**
   * Reference to original ref instance(tag: dom).
   */
  forwardedRef?: any;
}

class ReactCheckbox extends Component<ReactCheckboxProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  private root;

  componentDidMount() {
    const { indeterminate } = this.props;
    this.root.indeterminate = indeterminate;
  }

  shouldComponentUpdate(inNextProps) {
    if (inNextProps.indeterminate !== this.props.indeterminate) {
      this.root.indeterminate = inNextProps.indeterminate;
    }
    return true;
  }

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    const checked = inEvent.target.checked;
    const target = { value: checked };
    onChange!({ target });
  };

  handleRef = (inRoot) => {
    const { forwardedRef } = this.props;
    classImperativeHandle(forwardedRef, inRoot);
    this.root = inRoot;
  };

  render() {
    const { className, defaultValue, onChange, indeterminate, forwardedRef, ...props } = this.props;
    return (
      <input
        type="checkbox"
        data-component={CLASS_NAME}
        defaultChecked={defaultValue}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        ref={this.handleRef}
        {...props}
      />
    );
  }
}

export default React.forwardRef((props: ReactCheckboxProps, ref: any) => (
  <ReactCheckbox {...props} ref={ref} />
));
