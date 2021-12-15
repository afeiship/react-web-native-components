import * as React from 'react';
import { render } from '@testing-library/react';
import ReactDialog from '../src/main';

/**
 * 由于 dialog 的 open/close/openModal 等属性都没有在 lib.dom.d.ts 里实现
 * 可能这个标签并非标准标签，或者有其它原因，导致 jsdom 里测试报错，暂时不用添加 test case
 */
describe('01/basic props', () => {
  test('<ReactDialog /> set content to body should be worked', () => {
    render(<ReactDialog>Hello Dialog</ReactDialog>);
    expect(document.body.innerHTML.includes('Hello Dialog')).toBeTruthy();
  });

  test('<ReactDialog /> set value to false should not open dialog', () => {
    render(<ReactDialog value={false}>Hello Dialog</ReactDialog>);
    expect(document.body.innerHTML.includes('open')).toBeFalsy();
  });
});
