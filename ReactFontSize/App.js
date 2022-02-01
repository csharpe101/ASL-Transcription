const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.fontSizes = ["xsmall", "small", "medium", "large", "xlarge"];
    this.state = {
      fontSize: "medium"
    };
  }
  
  handleChange = e => {
    this.setState({
      fontSize: e.target.value
    });
  }
  
  render() {
    let livecaptions = {};
    if (this.state.fontSize === 'xsmall') {
      livecaptions.fontSize = '6px';
    }
    if (this.state.fontSize === 'small') {
      livecaptions.fontSize = '8px';
    }
    if (this.state.fontSize === 'medium') {
      livecaptions.fontSize = '14px';
    }
    if (this.state.fontSize === 'large') {
      livecaptions.fontSize = '20px';
    }
    if (this.state.fontSize === 'xlarge') {
      livecaptions.fontSize = '26px';
    }
    
    return (
      <div>
        {this.fontSizes.map(s => <div>
          <input
            type="radio"
            value={s}
            checked={this.state.fontSize === s}
            onChange={this.handleChange} />{s}</div>)}
        <pre style={livecaptions}>{`LIVE CAPTIONS HERE...`}</pre>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
export default App;