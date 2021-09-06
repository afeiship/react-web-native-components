import React, { Component } from 'react';
import classNames from 'classnames';
import noop from '@jswork/noop';
import ReactList from '@jswork/react-list';
import classImperativeHandle from '@jswork/class-imperative-handle';
import debounce from 'debounce';
import nxToggle from '@jswork/next-toggle';

const randomName = () => 'cg_' + Math.random().toString(36).substring(6);
const CLASS_NAME = 'react-checkbox-group';
const noEventStyle: any = { pointerEvents: 'none' };
const DEFAULT_TEMPLATE = ({ item }, cb) => {
  const { value, label } = item;
  return (
    <span key={value} className="is-item">
      {cb()}
      {label}
    </span>
  );
};

export interface EventTarget {
  target: {
    value: any;
  };
}

type BaseProps = Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'>;

export interface TemplateArgs {
  item: any;
  index: number;
}

export type TempalteCallback = (value: any, itemProps: any) => JSX.Element;
export interface ReactCheckboxGroupProps extends BaseProps {
  /**
   * The changed handler.
   */
  onChange?: (inEvent: EventTarget) => void;
  /**
   * Default selected value.
   */
  defaultValue?: any[];
  /**
   * Runtime selected value.
   */
  value?: any[];
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
  template?: (args: TemplateArgs, callback: TempalteCallback) => any;
}

class ReactCheckboxGroup extends Component<ReactCheckboxGroupProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: [],
    defaultValue: [],
    name: randomName(),
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  private root;

  get value() {
    const result: any[] = [];
    const fields = this.root.querySelectorAll(`.${CLASS_NAME} [type="checkbox"]:checked`);
    fields.forEach((item) => {
      result.push(item.dataset.value);
    });
    return result;
  }

  handleChange = () => {
    const { onChange } = this.props;
    onChange!({ target: { value: this.value } });
  };

  handleRef = (inRoot) => {
    const { forwardedRef } = this.props;
    classImperativeHandle(forwardedRef, inRoot);
    this.root = inRoot;
  };

  handleTemplate = ({ item, index }) => {
    const { name, defaultValue, template } = this.props;
    const { value, label, ...itemProps } = item;
    const cb = () => {
      return (
        <input
          defaultChecked={defaultValue!.includes(value)}
          name={name}
          type="checkbox"
          data-value={value}
          style={noEventStyle}
          {...itemProps}
        />
      );
    };

    return template!({ item, index }, cb);
  };

  originalClick = (inEvent) => {
    const { value, onChange } = this.props;
    const { target } = inEvent;
    const el = target.querySelector('[type="checkbox"]');
    nxToggle(value, el.dataset.value);
    el.checked = !el.checked;
    this.forceUpdate(() => {
      onChange!({ target: { value } });
    });
  };

  handleClick = debounce(this.originalClick, 100, true);

  render() {
    const {
      className,
      name,
      items,
      template,
      value,
      defaultValue,
      onChange,
      forwardedRef,
      ...props
    } = this.props;

    return (
      <span
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        ref={this.handleRef}
        onClick={this.handleClick}
        {...props}>
        <ReactList items={items} template={this.handleTemplate} />
      </span>
    );
  }
}

export default React.forwardRef((props: ReactCheckboxGroupProps, ref: any) => {
  return <ReactCheckboxGroup {...props} ref={ref} />;
});
