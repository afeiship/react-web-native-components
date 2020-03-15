import ReactInput from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: '123'
  };

  onChange = (inEvent) => {
    // console.log('inEvent', inEvent.target.value);
    this.setState({ value: inEvent.target.value });
  };

  setRandomValue = (e) => {
    this.setState({ value: (Math.random() + 'value').slice(0, 5) });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-container">
        <button className="button" onClick={this.setRandomValue}>
          SetRandomValue
        </button>
        <ReactInput value={value} onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
