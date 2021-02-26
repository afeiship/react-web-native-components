import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactInput from '../src/main';
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
