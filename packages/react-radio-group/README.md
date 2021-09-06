# react-radio-group
> Abstract radio component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-radio-group
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


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
  import ReactRadioGroup from '../@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactRadioGroup />
      </Container>
    );
  };

  ```

## license
Code released under [the MIT license](https://github.com/afeiship/react-radio-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-radio-group
[version-url]: https://npmjs.org/package/@jswork/react-radio-group

[license-image]: https://img.shields.io/npm/l/@jswork/react-radio-group
[license-url]: https://github.com/afeiship/react-radio-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-radio-group
[size-url]: https://github.com/afeiship/react-radio-group/blob/master/dist/react-radio-group.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-radio-group
[download-url]: https://www.npmjs.com/package/@jswork/react-radio-group
