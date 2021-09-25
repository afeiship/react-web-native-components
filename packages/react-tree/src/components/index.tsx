import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import nxTreeWalk from '@jswork/next-tree-walk';


const CLASS_NAME = 'react-tree';

export type ReactTreeProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The data source.
   */
  items?: any[];
  /**
   * Item template.
   */
  template?: Function;
  /**
   * Child item key.
   */
  itemsKey: any;
};

export default class ReactTree extends Component<ReactTreeProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';

  static defaultProps = {
    template: noop,
    itemsKey: 'children'
  };

  get childView() {
    const { items, itemsKey, template } = this.props;
    return nxTreeWalk(items, {
      template,
      itemsKey
    });
  }

  render() {
    const { className, items, itemsKey, template, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        data-role="root"
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </div>
    );
  }
}
