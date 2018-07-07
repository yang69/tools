import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import TextField from '@material-ui/core/TextField';
import QrCode from 'qrcode.react';

class TextToQrcode extends Component {
  state = {
    text: "",
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    ("二维码生成器" !== document.title) && (document.title = "二维码生成器");
  }

  componentDidUpdate() {
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    const {text} = this.state;

    return (
      <div style={{marginTop:"1.75em"}}>
        <p className="App-intro">
          {intl.get("QRCODE_TIP")}
        </p>
        <TextField
          onChange={this.handleInputChange.bind(this)}
          placeholder="二维码中的文本"
          value={text}
          label={intl.get("QRCODE_TEXT")}
          multiline={true}
          style={{marginBottom:"0.75em"}}
        />
        <div style={{marginTop:"0.75em"}}>
          {
            0 !== text.length && <QrCode value={text} size={256}/>
          }
        </div>
      </div>
    )
  }
}

export default TextToQrcode;