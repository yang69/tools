import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Check from '@material-ui/icons/Check';
import copy from 'copy-to-clipboard';

const btihRegExp = /^[0-9A-F]{40}$/i;
const validHashChar = /^[0-9A-F]*$/i;

class HashToMagnet extends Component {
  state = {
    hash: "",
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    ("哈希转磁力链接" !== document.title) && (document.title = "哈希转磁力链接");
  }

  componentDidUpdate() {
  }

  handleInputChange = event => {
    const hash = event.target.value;
    if (validHashChar.test(hash)) {
      this.setState({
        hash: event.target.value,
      })
    }
  }

  handleCopy = () => {
    0 != this.state.hash.length && (copy("magnet:?xt=urn:btih:" + this.state.hash),alert("已复制到剪切板"));
  }

  render() {
    const magnetLink = "magnet:?xt=urn:btih:" + this.state.hash;

    return (
      <div style={{marginTop:"1.75em"}}>
        <p className="App-intro">
          在输入框中输入<code>BitTorrent info hash</code>字段，其余部分自动补全，点击对勾复制磁力链接到剪切板
        </p>
        <TextField
          onChange={this.handleInputChange.bind(this)}
          placeholder="请输入 BitTorrent info hash"
          value={this.state.hash}
          label="哈希值："
          multiline={true}
          style={{marginBottom:"0.75em"}}
        />
        <div style={{marginLeft:"1em", marginRight:"1em"}}>
          {
            btihRegExp.test(this.state.hash)
              &&
            <Paper elevation={4} style={{marginTop:"0.25em"}}>
              <br/>
              <Typography variant="headline" component="h3" style={{marginTop:"0.75em"}}>
                {magnetLink}
              </Typography>
              <IconButton
                onClick={this.handleCopy.bind(this)}
                color="inherit"
                style={{marginTop:"0.75em",marginBottom:"0.75em"}}
              >
                <Check/>
              </IconButton>
            </Paper>
          }
        </div>
      </div>
    );
  }
}

export default HashToMagnet;