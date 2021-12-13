# react-dialog
> Web native dialog for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-dialog
```

## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDialog from '@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactDialog />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-dialog/

## license
Code released under [the MIT license](https://github.com/afeiship/react-dialog/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-dialog
[version-url]: https://npmjs.org/package/@jswork/react-dialog

[license-image]: https://img.shields.io/npm/l/@jswork/react-dialog
[license-url]: https://github.com/afeiship/react-dialog/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-dialog
[size-url]: https://github.com/afeiship/react-dialog/blob/master/dist/react-dialog.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-dialog
[download-url]: https://www.npmjs.com/package/@jswork/react-dialog
