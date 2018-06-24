import React, { Component } from 'react';
import './App.css';
import Info from "./Info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
    }
  }
  onChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Yang's Tool Kit</h1>
        </header>
        {/*<FullWidthTabs />*/}
        <Info
          text={this.state.text}
          onChange={this.onChange}
        />
        <p className="App-intro" style={{marginTop:"3em"}}>
          See <a href={"https://github.com/yang69"}>https://github.com/yang69</a> for more.
        </p>
      </div>
    );
  }
}

export default App;
