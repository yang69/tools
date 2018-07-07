import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HashToMagnet from './HashToMagnet';
import TextToQrcode from "./TextToQrcode";
import MagnetToHash from "./MagnetToHash";
import EncodingTools from './EncodingTools';

const tabs = [
  {value: 0, hash: "#text-to-qrcode"},
  {value: 1, hash: "#date-calculator"},
  {value: 2, hash: "#json-resolver"},
  {value: 3, hash: "#hash-to-magnet"},
  {value: 4, hash: "#magnet-to-hash"},
  {value: 5, hash: "#encoding-tools"}
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
  }

  handleChange = (event, value) => {
    this.setState({
      tabIndex: value,
    })
  }

  render() {
    const {tabIndex} = this.state;
    return (
      <Switch>
        <Route exact path="/" component={TextToQrcode}/>
        <Route path="/encoding" component={EncodingTools}/>
        <Route path="/text-to-qrcode" component={TextToQrcode}/>
        <Route path="/magnet-to-hash" component={MagnetToHash}/>
        <Route path="/hash-to-magnet" component={HashToMagnet}/>
      </Switch>
    )
  }
}

export default Info;