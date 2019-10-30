import ReactInput from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  _onChange = (inEvent) => {
    console.log('inEvent', inEvent.target.value);
  };
  render() {
    return (
      <div className="app-container">
        <ReactInput defaultValue="1213" onChange={this._onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
