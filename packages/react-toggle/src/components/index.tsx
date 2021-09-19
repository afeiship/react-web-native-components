import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';

const CLASS_NAME = 'react-toggle';

export type ReactToggleProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * If onClick works.
   */
  disabled?: boolean;
  /**
   * Default value.
   */
  value?: boolean;
  /**
   * The change handler.
   */
  onChange?: (event: any) => void;
  /**
   * The click handler.
   */
  onClick?: (event: any) => void;
};

export default class ReactToggle extends Component<ReactToggleProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: false,
    disabled: false,
    onChange: noop
  };

  state = {
    value: this.props.value
  };

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleClick = () => {
    const { value } = this.state;
    const { onChange, disabled } = this.props;
    const target = { value: !value };
    if (disabled) return;
    this.setState(target, () => {
      onChange!({ target });
    });
  };

  render() {
    const { className, value, onClick, ...props } = this.props;
    return (
      <span
        data-component={CLASS_NAME}
        data-value={this.state.value}
        className={classNames(CLASS_NAME, className)}
        onClick={this.handleClick}
        {...props}
      />
    );
  }
}
