import React, { Component } from 'react';
import classNames from 'classnames';
import noop from '@jswork/noop';
import classImperativeHandle from '@jswork/class-imperative-handle';
import ReactList from '@jswork/react-list';

const CLASS_NAME = 'react-select';
const DEFAULT_TEMPLATE = ({ item, index }) => {
  const { label, value, ...itemProps } = item;
  return (
    <option value={value} key={index} {...itemProps}>
      {label}
    </option>
  );
};

export interface TemplateArgs {
  item: any;
  index: number;
}

export interface EventTarget {
  target: {
    value: any;
  };
}

export interface ReactSelectProps
  extends Omit<React.AllHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  /**
   * The changed handler.
   */
  onChange?: (inEvent: EventTarget) => void;
  /**
   * Reference to original ref instance(tag: dom).
   */
  forwardedRef?: any;
  /**
   * Select options data source.
   */
  items?: any[];
  /**
   * Select option item teamplate.
   */
  template?: (args: TemplateArgs) => any;
}

class ReactSelect extends Component<ReactSelectProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    multiple: false,
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  private root;

  get value() {
    if (this.root) {
      const els = this.root.querySelectorAll('option:checked');
      const items = [].slice.call(els);
      return items.map((item) => item.value);
    }
    return [];
  }

  handleChange = () => {
    const { onChange, multiple } = this.props;
    const value = multiple ? this.value : this.value[0];
    onChange!({
      target: { value }
    });
  };

  handleRef = (inRoot) => {
    const { forwardedRef } = this.props;
    classImperativeHandle(forwardedRef, inRoot);
    this.root = inRoot;
  };

  render() {
    const { className, items, template, onChange, forwardedRef, ...props } = this.props;
    return (
      <select
        ref={this.handleRef}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...props}>
        <ReactList items={items} template={template} />
      </select>
    );
  }
}

export default React.forwardRef((props: ReactSelectProps, ref) => (
  <ReactSelect {...props} forwardedRef={ref} />
));
