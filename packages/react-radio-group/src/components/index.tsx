import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactList from '@jswork/react-list';
import { ReactListProps } from '@jswork/react-list/dist/components';

const CLASS_NAME = 'react-radio-group';
const randomName = () => 'rg_' + Math.random().toString(36).substring(6);
const DEFAULT_TEMPLATE = ({ item, current }, cb) => {
  const { value, label } = item;
  return (
    <label key={value} className="is-item" data-active={current === value}>
      {cb(value)}
      <span className="is-label">{label}</span>
    </label>
  );
};

export interface EventTarget {
  target: {
    value: any;
  };
}

type BaseProps = Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange'> & ReactListProps;

export interface TemplateArgs {
  item: any;
  index: number;
  current: any;
}

export type TemplateCallback = (value: any, itemProps?: any) => JSX.Element;

export type ReactRadioGroupProps = BaseProps & {
  /**
   * The changed handler.
   */
  onChange?: (inEvent: EventTarget) => void;
  /**
   * Default selected value.
   */
  defaultValue?: any;
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
  template?: (args: TemplateArgs, callback: TemplateCallback) => any;
};

class ReactRadioGroup extends Component<ReactRadioGroupProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';

  static defaultProps = {
    items: [],
    name: randomName(),
    onChange: noop,
    template: DEFAULT_TEMPLATE
  };

  private current;

  getInitialChecked(inValue) {
    const { value, defaultValue } = this.props;
    const val = (v) => {
      return typeof v !== 'undefined' ? v === inValue : undefined;
    };

    return {
      checked: val(value),
      defaultChecked: val(defaultValue)
    };
  }

  onChange = (inEvent) => {
    const { value } = inEvent.target.dataset;
    const { onChange } = this.props;
    this.current = value;
    this.forceUpdate();
    onChange!({ target: { value } });
  };

  handleTemplate = ({ item, index }) => {
    const { name, template } = this.props;
    const cb: TemplateCallback = (inValue, inProps) => {
      return (
        <input
          onChange={this.onChange}
          type="radio"
          name={name}
          data-value={inValue}
          {...this.getInitialChecked(inValue)}
          {...inProps}
        />
      );
    };
    return template!({ item, index, current: this.current }, cb);
  };

  render() {
    const {
      className,
      value,
      defaultValue,
      items,
      name,
      template,
      onChange,
      disabled,
      readOnly,
      ...props
    } = this.props;

    return (
      <ReactList
        nodeName="span"
        data-disabled={disabled}
        data-readonly={readOnly}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        items={items}
        template={this.handleTemplate}
        {...props}
      />
    );
  }
}

export default React.forwardRef((props: ReactRadioGroupProps, ref: any) => (
  <ReactRadioGroup {...props} ref={ref} />
));
