# react-input
> Pure input for react.

## installation
```shell
npm install -S @feizheng/react-input
```

## update
```shell
npm update @feizheng/react-input
```

## properties
| property  | type     | default | description |
| --------- | -------- | ------- | ----------- |
| className | String   | -       | -           |
| value     | String   | -       | -           |
| onChange  | Function | Noop    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-input/dist/style.scss";

  // customize your styles:
  $react-input-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactInput from '@feizheng/react-input';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactInput />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-input/
