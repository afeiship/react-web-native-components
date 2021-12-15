import * as React from 'react';
import { render } from '@testing-library/react';
import ReactDialog from '../src/main';

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
