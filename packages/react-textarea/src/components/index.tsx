import React, { Component } from 'react';
import classNames from 'classnames';
import noop from '@jswork/noop';
import autoSize from 'autosize';
import classImperativeHandle from '@jswork/class-imperative-handle';

const CLASS_NAME = 'react-textarea';

export interface EventTarget {
  target: {
    value: any;
  };
}

export interface ReactTextareaProps
  extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /**
   * The changed handler.
   */
  onChange?: (inEvent: EventTarget) => void;
  /**
   * Reference to original ref instance(tag: dom).
   */
  forwardedRef?: any;
  /**
   * If auto height.
   */
  autosize: boolean;
}

class ReactTextarea extends Component<ReactTextareaProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  private root;

  componentDidMount() {
    const { autosize } = this.props;
    autosize && autoSize(this.root);
  }

  handleRef = (inRoot) => {
    const { forwardedRef } = this.props;
    classImperativeHandle(forwardedRef, inRoot);
    this.root = inRoot;
  };

  render() {
    const { autosize, className, ...props } = this.props;
    return (
      <textarea ref={this.handleRef} className={classNames(CLASS_NAME, className)} {...props} />
    );
  }
}

export default React.forwardRef((props: ReactTextareaProps, ref: any) => (
  <ReactTextarea {...props} ref={ref} />
));
