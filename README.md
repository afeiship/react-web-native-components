# react-input
> Pure input for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-input
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| value        | string | false    | -       | The runtime value.                    |
| defaultValue | string | false    | -       | The static default value.             |
| onChange     | func   | false    | noop    | The changed handler.                  |


## usage
1. import css
  ```scss
  @import "~@jswork/react-input/dist/style.css";

  // or use sass
  @import "~@jswork/react-input/dist/style.scss";

  // customize your styles:
  $react-input-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactInput from '@jswork/react-input';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: '123'
    };

    onChange = (inEvent) => {
      console.log('inEvent', inEvent.target.value);
      this.setState({ value: inEvent.target.value });
    };

    setRandomValue = (e) => {
      this.setState({ value: (Math.random() + 'value').slice(0, 5) });
    };

    render() {
      const { value } = this.state;

      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-input">
          <button className="button mb-2 is-primary is-fullwidth" onClick={this.setRandomValue}>
            SetRandomValue
          </button>
          <ReactInput value={value} onChange={this.onChange} />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-input/


## license
Code released under [the MIT license](https://github.com/afeiship/react-input/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-input
[version-url]: https://npmjs.org/package/@jswork/react-input

[license-image]: https://img.shields.io/npm/l/@jswork/react-input
[license-url]: https://github.com/afeiship/react-input/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-input
[size-url]: https://github.com/afeiship/react-input/blob/master/dist/react-input.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-input
[download-url]: https://www.npmjs.com/package/@jswork/react-input
