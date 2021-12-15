import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component, createRef } from 'react';

const CLASS_NAME = 'react-dialog';

export interface EventTarget {
  target: {
    value: any;
  };
}

interface HTMLDialogElementExt extends HTMLDialogElement {
  open: boolean;
  close: () => void;
  showModal: () => void;
}

type BaseProps = Omit<React.AllHTMLAttributes<HTMLDialogElementExt>, 'onChange' | 'value'>;

export interface ReactDialogProps extends BaseProps {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * If dialog opened.
   */
  value?: boolean;
  /**
   * The change handler.
   */
  onChange?: (inEvent: EventTarget) => void;
}

export default class ReactDialog extends Component<ReactDialogProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: false,
    onChange: noop
  };

  private rootRef = createRef<HTMLDialogElementExt>();

  get dom() {
    return this.rootRef.current!;
  }

  get value() {
    return this.dom!.open;
  }

  componentDidMount() {
    this.updateComponent(this.props);
  }

  updateComponent(inProps) {
    const { value } = inProps;
    if (value && !this.value) this.dom.showModal();
    if (!value && this.value) this.dom.close();
  }

  shouldComponentUpdate(nextProps: Readonly<ReactDialogProps>): boolean {
    const { onChange } = this.props;
    onChange!({ target: { value: this.value } });
    this.updateComponent(nextProps);
    return true;
  }

  render() {
    const { className, value, onChange, ...props } = this.props;

    return (
      <dialog
        ref={this.rootRef}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
