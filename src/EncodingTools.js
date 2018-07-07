import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

const codingMethod = [
  "ENCODING_URLENCODE",
  "ENCODING_BASE64"
]

class EncodingTools extends Component {
  state = {
    tabIndex: 0,
    text: "",
    encodedText: "",
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // ("二维码生成器" !== document.title) && (document.title = "二维码生成器");
  }

  componentDidUpdate() {
  }

  handleChange = (event, value) => {
    this.setState({
      tabIndex: value,
    })
  }

  handleInput = (event) => {
    let text = event.target.value;
    let encodedText = this.encode(text);
    this.setState({
      text: text,
      encodedText: encodedText,
    })
  }

  encode = (text) => {
    let encodedText = "";
    switch (this.state.tabIndex) {
      case 0:
        encodedText = encodeURI(text);
        break;
    }
    return encodedText
  }

  render() {
    const {tabIndex, text, encodedText} = this.state;
    return (
      <div>
        <AppBar position={"static"} color={"default"}>
          <Tabs
            value={this.state.tabIndex}
            // centered={true}
            fullWidth={true}
            // width={"12px"}
            onChange={this.handleChange}
            scrollable={true}
            scrollButtons={"on"}
          >
            <Tab label={intl.get("ENCODING_URLENCODE")}></Tab>
            <Tab label={intl.get("ENCODING_BASE64")} disabled={true}></Tab>
          </Tabs>
        </AppBar>
        <div style={{margin: "3em"}}>
          <div>
            <TextField
              fullWidth={true}
              placeholder={intl.get(codingMethod[tabIndex] + "_PLACEHOLDER_TEXT")}
              onChange={this.handleInput}
            />
          </div>
          <div style={{marginTop: "2em"}}>
            <TextField
              value={encodedText}
              fullWidth={true}
              placeholder={intl.get(codingMethod[tabIndex] + "_PLACEHOLDER_ENCODED")}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EncodingTools;