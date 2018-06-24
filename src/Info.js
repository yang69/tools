import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HashToMagnet from './HashToMagnet';
import TextToQrcode from "./TextToQrcode";
import MagnetToHash from "./MagnetToHash";

const tabs = [
  {value: 0, hash: "#text-to-qrcode"},
  {value: 1, hash: "#date-calculator"},
  {value: 2, hash: "#json-resolver"},
  {value: 3, hash: "#hash-to-magnet"},
  {value: 4, hash: "#magnet-to-hash"},
]

class Info extends Component {
  state = {
    tabIndex: 0,
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const hash = window.location.hash;
    // console.log(hash)
    switch (hash) {
      case tabs[0].hash: this.setState({tabIndex:tabs[0].value});console.log("location change to: " + tabs[0].hash);break;
      case tabs[1].hash: this.setState({tabIndex:tabs[1].value});console.log("location change to: " + tabs[1].hash);break;
      case tabs[2].hash: this.setState({tabIndex:tabs[2].value});console.log("location change to: " + tabs[2].hash);break;
      case tabs[3].hash: this.setState({tabIndex:tabs[3].value});console.log("location change to: " + tabs[3].hash);break;
      case tabs[4].hash: this.setState({tabIndex:tabs[4].value});console.log("location change to: " + tabs[4].hash);break;
      default: this.setState({tabIndex:0});
    }
  }

  componentDidUpdate() {
    window.location.hash = tabs[this.state.tabIndex].hash;
  }

  handleChange = (event, value) => {
    this.setState({
      tabIndex: value,
    })
  }

  render() {
    const {tabIndex} = this.state;
    return (
      <div>
        <AppBar position={"static"} color={"default"}>
          <Tabs
            value={this.state.tabIndex}
            centered={true}
            onChange={this.handleChange}
          >
            <Tab label={"Text To Qr-Code"}></Tab>
            <Tab label={"Date Calculator"} disabled={true}></Tab>
            <Tab label={"JSON Resolver"} disabled={true}></Tab>
            <Tab label={"Hash To Magnet"}></Tab>
            <Tab label={"Magnet To Hash"}></Tab>
          </Tabs>
        </AppBar>
        {0 == tabIndex && <TextToQrcode />}
        {1 == tabIndex && <div>Still in progress</div>}
        {2 == tabIndex && <div>Still in progress</div>}
        {3 == tabIndex && <HashToMagnet />}
        {4 == tabIndex && <MagnetToHash />}
      </div>
    )
  }
}

export default Info;